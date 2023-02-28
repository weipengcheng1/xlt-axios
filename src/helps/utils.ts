const toString = Object.prototype.toString

// 是否为时间类型
export const isDate = (val: any) :val is Date => {
  return toString.call(val) === '[Object Date]'
}


// 是否为object
export const isObject = (val: any) :val is Object => {
  return val !== null && typeof val === 'object'
}
