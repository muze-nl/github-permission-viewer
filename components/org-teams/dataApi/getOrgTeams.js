function(organization) {
  return simplyRawApi.get("/orgs/" + organization + "/teams")
    .then(function(response) {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("getOrgTeams failed", response.status);
  });
}