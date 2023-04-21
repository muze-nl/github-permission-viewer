function(organization, team) {
  return simplyRawApi.get("/orgs/" + organization + "/teams/" + team + "/members")
    .then(function(response) {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("getTeamMembers failed", response.status);
  });
}