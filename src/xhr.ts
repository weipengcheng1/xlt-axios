import { IAxiosRequestConfig } from './types'

export default function xhr(config: IAxiosRequestConfig): Promise<any> {
  return new Promise((resolve, reject) => {
    let { data = null, params, headers = null, timeout, url, method = 'get' } = config
    const request = new XMLHttpRequest()
    request.open(method, url, true)
    if (timeout) {
      request.timeout = timeout
    }
    Object.keys(headers).forEach(header => {
      if (data === null && header.toLowerCase() === 'content-type') {
        headers[header] = undefined
      }
      request.setRequestHeader(header, header[headers])
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

