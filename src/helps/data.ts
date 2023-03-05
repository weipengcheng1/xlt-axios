import { isPlainObject } from './utils'

export const transformRequest = (data: any): any => {
  let copyData = data
  if (isPlainObject(copyData)) {
    copyData = JSON.stringify(data)
  }
  return copyData
}


export const transformResponse = (data: any): any => {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // 空
    }
  }

  return data
}
