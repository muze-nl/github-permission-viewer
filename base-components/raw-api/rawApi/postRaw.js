function(endpoint, params={}, body) {
  return fetch(simplyRawApi.url + endpoint, {
    mode : 'cors',
    headers: this.headers,
    method: "POST",
    body: body
  });
}