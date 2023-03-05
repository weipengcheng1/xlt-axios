import { IAxiosPromise, IAxiosRequestConfig, IAxiosResponse } from './types'
import xhr from './xhr'
import { buildURL } from './helps/url'
import { transformRequest, transformResponse } from './helps/data'
import { processHeaders } from './helps/headers'

function xltAxios(config: IAxiosRequestConfig): IAxiosPromise {
  // TODO
  processConfig(config)
  return xhr(config).then(response => {
    return transformResponseData(response)
  })
}


const processConfig = (config: IAxiosRequestConfig) => {
  config.url = transformURL(config)
  config.headers = transformRequestHeaders(config)
  config.data = transformRequestData(config)
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

const transformResponseData = (res: IAxiosResponse): any => {
  res.data = transformResponse(res.data)
  return res
}

export default xltAxios
