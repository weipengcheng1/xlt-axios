import { IAxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helps/url'

function xltAxios(config: IAxiosRequestConfig) {
  // TODO
  processConfig(config)
  console.log(config)
  return xhr(config)
}

export const processConfig = (config: IAxiosRequestConfig) => {
  config.url = buildURL(config.url, config.params)
}

export default xltAxios
