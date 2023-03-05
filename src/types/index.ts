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
  headers?: Headers | any;
  responseType?: XMLHttpRequestResponseType;
  timeout?: number;
}

export interface IAxiosResponse {
  data: any;
  status: number;
  statusText: string;
  headers: any;
  config: IAxiosRequestConfig;
  request: any;
}


export interface IAxiosPromise extends Promise<IAxiosResponse> {
}


export interface IAxiosError extends Error {
  isAxiosError: boolean;
  config: IAxiosRequestConfig;
  code?: string | null;
  request?: any;
  response?: IAxiosResponse
}
