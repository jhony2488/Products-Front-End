/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
export function setQueryParams(url: string, params: Object) {

    let hasParams = url.includes('?')
  
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const value = encodeURIComponent(params[key])
        url += `${hasParams ? '&' : '?'}${encodeURIComponent(key)}=${value}`
        hasParams = true
      }
    }
  
    return url
  }
  