import { IAxiosRequestConfig } from './types'

export default function xhr(config: IAxiosRequestConfig): Promise<any> {
  return new Promise((resolve, reject) => {
    let { data = null, params, headers = null, timeout, url, method = 'get' } = config
    const request = new XMLHttpRequest()
    request.open(method, url, true)
    if (timeout) {
      request.timeout = timeout
    }
    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        headers[name] = undefined
      }
      request.setRequestHeader(name, headers[name])
    })
    request.send(data)

    request.onload = (res: ProgressEvent<EventTarget>) => {
      resolve(res.target)
    }

    request.onerror = (error: ProgressEvent) => {
      reject(error)
    }
  })
}

