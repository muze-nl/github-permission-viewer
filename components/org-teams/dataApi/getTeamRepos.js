function(organization, team) {
  return simplyRawApi.get("/orgs/" + organization + "/teams/" + team + "/repos")
    .then(function(response) {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("getTeamRepos failed", response.status);
  });
}