export  type TMethod =
  'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'options'
  | 'OPTIONS'
  | 'HEAD'
  | 'head'
  | 'PUT'
  | 'put'
  | 'patch'
  | 'PATCH'

export interface Headers {
  [key: string]: any
}

export interface IAxiosRequestConfig {
  url: string;
  method?: TMethod;
  data?: any;
  params?: any;
  headers?: Headers | any,
  responseType?: any,
  timeout?: number
}


