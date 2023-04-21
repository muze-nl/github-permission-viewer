function(organization, repo) {
  return simplyRawApi.get("/repos/" + organization + "/" + repo + "/collaborators", {
    "affiliation" : "direct",
    "per_page" : 100
  })
  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("getOrgRepoMembers failed", response.status);
  });
}