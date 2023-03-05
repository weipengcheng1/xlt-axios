const toString = Object.prototype.toString

// 是否为时间类型
export const isDate = (val: any): val is Date => {
  return toString.call(val) === '[Object Date]'
}


// 是否为object
export const isObject = (val: any): val is Object => {
  return val !== null && typeof val === 'object'
}

// 判断值是否为普通对象
export const isPlainObject = (val: any): val is Object => {
  return toString.call(val) === '[object Object]'
}
