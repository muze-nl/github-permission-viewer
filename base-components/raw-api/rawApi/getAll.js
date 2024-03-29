function (endpoint, params = {}) {
  const requestHeaders = this.headers;

  function getNextPageUrl(headers) {
    const link = headers.get("link")

    let url = null

    if (link) {
      const linkInfo = link.split(",")
      linkInfo.forEach(function (linkItem) {
        const parts = linkItem.split(";")
        if (parts[1].trim() === 'rel="next"') {
          url = parts[0].replace("<", "").replace(">", "")
        }
      })
    }

    return url
  }

  function getAll(url, responses) {
    responses = responses || []

    return fetch(url, {
      mode: 'cors',
      headers: requestHeaders
    })
    .then(async function (response) {
      if (response.ok) {
        const url = getNextPageUrl(response.headers)

        return {json: await response.json(), url}
      } else {
        throw {message: "getAll failed", response}
      }
    })
    .then(function ({json, url}) {
      responses.push(...json)

      if (url) {
        return getAll(url, responses)
      } else {
        return responses
      }
    })
  }

  params.per_page = params.per_page || 100
  let url = simplyRawApi.url + endpoint + simplyRawApi.encodeGetParams(params)

  return getAll(url)
}
