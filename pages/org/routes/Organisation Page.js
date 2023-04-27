function(params) {
  editor.pageData.pageParams = params;
  Promise.all([
    simplyApp.actions.getOrgMembers(params.organization),
    simplyApp.actions.getOrgTeams(params.organization),
    simplyApp.actions.getOrgRepos(params.organization),
  ])
  .then(function([orgMembers, orgTeams, orgRepos]) {
    orgTeams.forEach(function(team) {
      const teamSlug = team.slug;
      Promise.all([
        simplyApp.actions.getTeamMembers(params.organization, teamSlug),
        simplyApp.actions.getTeamRepos(params.organization, teamSlug)
      ]).then(function([teamMembers, teamRepos]) {
        teamMembers.forEach(function(teamMember) {
          orgMembers.forEach(function(orgMember) {
            if (teamMember.login === orgMember.login) {
              if (typeof orgMember.teams === "undefined") {
                orgMember.teams = [];
              }
              orgMember.teams.push({
                "team" : teamSlug
              });
            }
          });
        });

        teamRepos.forEach(function(teamRepo) {
          orgRepos.forEach(function(orgRepo) {
            if (teamRepo.name === orgRepo.name) {
              if (typeof orgRepo.teams === "undefined") {
                orgRepo.teams = [];
              }
              orgRepo.teams.push({
                "team" : teamSlug
              });
            }
          });
        });
      });
    });
    return [orgMembers, orgRepos, orgTeams];
  })
  .then(function([orgMembers, orgRepos, orgTeams]) {
    orgRepos.forEach(function(repo) {
      const repoSlug = repo.name;
      Promise.all([
        simplyApp.actions.getOrgRepoMembers(params.organization, repoSlug)
      ]).then(function([repoMembers]) {
        repo.repoMembers = repoMembers;
      }).catch(function(error) {
        repo.repoMembers = [];
        if (error.response && error.response.json) {
          error.response.json().then(function(json) {
            if (json.message) {
              // @FIXME: Replace `alert()` with actual error messaging
              alert(`Could not fetch collaborators for "${repoSlug}": ${json.message}`);
            }
          });
        } else {
          alert(`Could not fetch collaborators for "${repoSlug}": ${error.message}`);
        }
      });
    });
    return [orgMembers, orgRepos, orgTeams];
  })
  .then(function([orgMembers, orgRepos, orgTeams]) {
      editor.pageData.orgMembers = orgMembers;
      editor.pageData.orgRepos = orgRepos;
      editor.pageData.orgTeams = orgTeams;
      editor.pageData.page = "org";
  });
}
