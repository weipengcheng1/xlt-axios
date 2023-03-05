import { IAxiosPromise, IAxiosRequestConfig, IAxiosResponse } from './types'
import { parseHeaders } from './helps/headers'

export default function xhr(config: IAxiosRequestConfig): IAxiosPromise {
  return new Promise((resolve, reject) => {
    let { data = null, responseType, params, headers = null, timeout, url, method = 'get' } = config
    const request = new XMLHttpRequest()
    request.open(method, url, true)
    // 请求超时时间设置
    if (timeout) {
      request.timeout = timeout
    }
    // 请求头设置
    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        headers[name] = undefined
      }
      request.setRequestHeader(name, headers[name])
    })

    // 响应类型设置
    if (responseType) {
      request.responseType = responseType
    }
    // 处理状态改变
    handelReadStateChange(request, config, reject, resolve)
    // 处理请求错误
    handleError(request, reject)
    request.send(data)

  })
}
// 处理 statechange
const handelReadStateChange = (request: XMLHttpRequest, config: IAxiosRequestConfig, resolve: any, reject: any) => {
  request.onreadystatechange = () => {
    if (request.status === 0) return
    if (request.readyState !== 4) return
    const responseHeaders = request.getAllResponseHeaders()
    const responseData = config.responseType && config.responseType !== 'text' ? request.response : request.responseText
    const response: IAxiosResponse = {
      headers: parseHeaders(responseHeaders),
      status: request.status,
      statusText: request.statusText,
      data: responseData,
      config,
      request
    }
    // 处理响应错误
    handlerResponseCodeErr(response, resolve, reject)
  }
}


const handleError = (request: XMLHttpRequest, reject: any) => {
  request.ontimeout = () => {
    reject(new Error(`Timeout of ${request.timeout} ms exceeded`))
  }

  request.onerror = () => {
    reject(new Error('Network Error'))
  }
}


const handlerResponseCodeErr = (response: IAxiosResponse, reject: any, resolve: any): any => {
  if (response.status >= 200 && response.status < 300) {
    resolve(response)
  } else {
    reject(new Error(`Request failed with status code ${response.status}`))
  }
}
