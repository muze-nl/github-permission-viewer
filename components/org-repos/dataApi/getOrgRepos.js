function(organization) {
  return simplyRawApi.getAll("/orgs/" + organization + "/repos")
}
