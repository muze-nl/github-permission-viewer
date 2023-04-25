function (form, values) {
  simplyRawApi.headers.Authorization = 'token ' + values['github-pat']

  return simplyApp.actions.getOrgs()
    .then(function (orgs) {
    // @TODO: Sort orgs alphabetically
    editor.pageData.orgs = orgs;
  });
}