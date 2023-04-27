function (endpoint, params = {}) {
  return fetch(simplyRawApi.url + endpoint + simplyRawApi.encodeGetParams(params), {
    mode: 'cors',
    headers: this.headers
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw {message: "get failed", response}
    }
  })
}
