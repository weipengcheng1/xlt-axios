// 构建url
export const buildURL = (url: string, params?: any): string => {
  console.log(params)
  if (!params) return url

  const parts: string[] = []

  Object.keys(params).forEach(key => {
    console.log(key)


  })

  return url

}

// encode转化url 并处理特殊字符串
const encode = (val: string): string => {
  return encodeURIComponent(val).replace(/%40/g, '@')
    .replace(/%3A/g, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/ig, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/ig, '[')
    .replace(/%5D/ig, ']')
}
