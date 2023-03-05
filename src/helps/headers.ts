import { isPlainObject } from './utils'
import { Headers } from '../types'


const normalizedHeaderName = (headers: Headers, normalizedName: string): Headers => {
  let copyHeader: Headers = {}
  if (!headers) {
    return {}
  }
  Object.keys(headers).forEach(header => {
    if (header !== normalizedName && header.toUpperCase() === normalizedName.toUpperCase()) {
      copyHeader[normalizedName] = headers[header]
    } else {
      copyHeader[header] = headers[header]
    }
  })
  return copyHeader
}

// 设置请求头
export const processHeaders = (headers: Headers, data: any): any => {
  const cHeaders = normalizedHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (cHeaders && !cHeaders['Content-Type']) {
      cHeaders['Content-Type'] = 'application/json; charset=utf-8'
    }
  }
  return cHeaders
}

// 格式化响应头
export const parseHeaders = (headers: any): any => {
  let headersObj: Headers = {}
  // @ts-ignore
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    if (!key) return
    headersObj[key.trim().toLowerCase()] = val ? val.trim() : undefined
  })
  return headersObj
}


// 格式化data 对象
