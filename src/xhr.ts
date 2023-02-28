import { IAxiosRequestConfig } from './types'
import { buildURL } from './helps/url'

export default function xhr(config: IAxiosRequestConfig): Promise<any> {
  return new Promise((resolve, reject) => {
    let { data = null, params, headers = null, timeout, url, method = 'get' } = config
    const request = new XMLHttpRequest()
    request.open(method, url, true)
    if (timeout) {
      request.timeout = timeout
    }
    if (['post', 'POST'].includes(method)) {
      request.setRequestHeader('Content-Type', 'application/json')
    }

    request.send(data)

    request.onload = (res: ProgressEvent<EventTarget>) => {
      resolve(res.target)
    }

    request.onerror = (error: ProgressEvent) => {
      reject(error)
    }
  })
}
