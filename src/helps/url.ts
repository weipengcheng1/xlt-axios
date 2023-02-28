// 构建url
import { isDate, isObject } from './utils'
import { config } from 'shelljs'
import { IAxiosRequestConfig } from '../types'

export const buildURL = (url: string, params?: any): string => {
  console.log(params)
  if (!params) return url

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    const val = params[key]
    // 空值忽略
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values: string[]
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(vKey => {
      if (isDate(vKey)) {
        vKey = vKey.toISOString()
      } else if (isObject(vKey)) {
        vKey = JSON.stringify(vKey)
      }
      parts.push(`${encode(key)}=${encode(vKey)}`)
    })
  })

  // 丢弃url中的哈希标记
  if (parts.length > 0) {
    url = url.indexOf('#') !== -1 ? url.slice(0, url.indexOf('#')) : url
    url += `${url.indexOf('?') !== -1 ? '&' : '?'}${parts.join('&')}`
  }
  console.log(url)
  return url
}

// encode转化url 并处理特殊字符串
const encode = (val: string): string => {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/g, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export const processConfig = (config: IAxiosRequestConfig) => {
  config.url = buildURL(config.url, config.params)
}

export const transformURL = (config: IAxiosRequestConfig) => {
  config.url = buildURL(config.url, config.params)
  return config
}
