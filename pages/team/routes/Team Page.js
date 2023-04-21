function(params) {
  editor.pageData.pageParams = params;
  return  Promise.all([
    simplyApp.actions.getTeamMembers(params.organization, params.team),
    simplyApp.actions.getTeamRepos(params.organization, params.team)
  ]).then(function([teamMembers, teamRepos]) {
    editor.pageData.orgMembers = teamMembers;
    editor.pageData.orgRepos = teamRepos;
    editor.pageData.page = "team";
  });
}