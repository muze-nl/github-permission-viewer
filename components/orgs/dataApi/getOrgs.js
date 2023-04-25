function () {
  return simplyRawApi.get("/user/orgs")
    .then(function (response) {
      if (response.status === 200) {
        return response.json();
      }
      throw new Error("getOrgs failed", response.status);
    });
}
