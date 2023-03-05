import { IAxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helps/url'
import { transformRequest } from './helps/data'
import { processHeaders } from './helps/headers'

function xltAxios(config: IAxiosRequestConfig) {
  // TODO
  processConfig(config)
  console.log(config, 'config')
  return xhr(config)
}


const processConfig = (config: IAxiosRequestConfig) => {
  config.url = transformURL(config)
  config.headers = transformRequestHeaders(config)
  config.data = transformRequestData(config)
  console.log(config, 'config 17')
}

const transformURL = (config: IAxiosRequestConfig) => {
  const { url, params } = config
  return buildURL(url, params)
}

const transformRequestData = (config: IAxiosRequestConfig): any => {
  return transformRequest(config.data)
}

const transformRequestHeaders = (config: IAxiosRequestConfig): any => {
  return processHeaders(config.headers, config.data)
}

export default xltAxios
