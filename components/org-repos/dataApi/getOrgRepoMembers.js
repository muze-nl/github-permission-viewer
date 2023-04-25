function(organization, repo) {
  return simplyRawApi.get("/repos/" + organization + "/" + repo + "/collaborators", {
    "affiliation" : "direct",
    "per_page" : 100
  })
  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    } else if (response.status === 404) {
      // If the repo does not have collaborators, a 404 is given. Ignore.
      return [];
    }
    throw new Error("getOrgRepoMembers failed", response.status);
  });
}
