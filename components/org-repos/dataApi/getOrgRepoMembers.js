function (organization, repo) {
  return simplyRawApi.getAll("/repos/" + organization + "/" + repo + "/collaborators", {
    "affiliation": "direct"
  }).catch(function (error) {
    if (error.response.status === 404) {
      // If the repo does not have collaborators, a 404 is given. Ignore.
      return [];
    } else {
      throw {
        message: "getOrgRepoMembers failed",
        response: error.response
      }
    }
  })
}
