import { isPlainObject } from './utils'

export const transformRequest = (data: any): any => {
  let copyData = data
  console.log(isPlainObject(copyData))
  if (isPlainObject(copyData)) {
    console.log("copy",copyData)
    copyData = JSON.stringify(data)
  }
  return copyData
}
