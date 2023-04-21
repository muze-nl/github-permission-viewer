function(organization) {
  return simplyRawApi.get("/orgs/" + organization + "/members")
    .then(function(response) {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("getMembers failed", response.status);
  });
}