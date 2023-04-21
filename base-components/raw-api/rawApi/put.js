function(endpoint, params={}) {
  return fetch(simplyRawApi.url + endpoint, {
    mode: 'cors',
    headers: this.headers,
    method: "PUT",
    body: JSON.stringify(params, null, "\t")
  });
}