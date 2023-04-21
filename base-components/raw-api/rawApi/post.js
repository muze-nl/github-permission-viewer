function(endpoint, params={}) {
  return fetch(simplyRawApi.url + endpoint, {
    mode : 'cors',
    headers: this.headers,
    method: "POST",
    body: JSON.stringify(params, null, "\t")
  });
}