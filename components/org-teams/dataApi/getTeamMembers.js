function(organization, team) {
  return simplyRawApi.getAll("/orgs/" + organization + "/teams/" + team + "/members")
}
