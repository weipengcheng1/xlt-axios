import { IAxiosRequestConfig } from './types'
import { buildURL } from './helps/url'

export default function xhr(config: IAxiosRequestConfig): Promise<any> {
  return new Promise((resolve, reject) => {
    console.log(config.params)
    const { data = null, params, headers = null, timeout, url, method = 'get' } = config
    buildURL(url,params)
    const request = new XMLHttpRequest()
    request.open(method, url, true)
    if (timeout) {
      request.timeout = timeout
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
