function(endpoint, params={}) {
  return fetch(simplyRawApi.url + endpoint + simplyRawApi.encodeGetParams(params), {
    mode : 'cors',
    headers: this.headers,
    method: "DELETE"
  });
}