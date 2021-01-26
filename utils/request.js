import axios from 'axios'

// 设置请求参数
const timeOut = 1000 * 1000 * 60
const BaseUrl = "hcgw.consultantlikeyzx.com"
// 创建实例
const service = axios.create({
  baseURL: BaseUrl,
  timeout: timeOut,
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
  config.headers = {'content-type': 'application/json'}
  return config
}), (error) => {
  return Promise.reject(error)
}

// 添加响应拦截器
service.interceptors.response.use((response) => {
  return response.data
}), (error) => {
  return Promise.reject(error)
}

//添加request 类
class request {
  // get 请求
  static get(url, params) {
    let config = {
      method: 'get',
      params: params,
      url: url
    }
    return service(url, config)
  }
  // post 请求
  static post(url, params) {
    let config = {
      method: 'post',
      data: params,
      url: url
    }
    return service(url, config)
  }
}

export default request