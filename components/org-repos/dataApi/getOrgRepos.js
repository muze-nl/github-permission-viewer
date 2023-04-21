function(organization) {
  // FIXME: Add handling for paging;
  /*
    .then(function(response) {
    let link = response.headers.get("link");
    if (link) {
      let linkInfo = link.split(",");
      linkInfo.forEach(function(linkItem) {
        let parts = linkItem.split(";");
        if (parts[1].trim() == 'rel="next"') {
          let url = parts[0].replace("<", "").replace(">", "");
          alert(url);
        }
      });
    }
    return response;
  })
*/
  
  return simplyRawApi.get("/orgs/" + organization + "/repos", {"per_page" : 100})
  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("getOrgRepos failed", response.status);
  });
}