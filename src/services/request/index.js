import axios from "axios";
import { BASE_URL, TIMEOUT } from './config'

class liRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    // 响应拦截
    this.instance.interceptors.response.use((res) => {
      return res.data
    }, err => {
      return err
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.instance.request({ ...config, method: "GET" })
  }

  post(config) {
    return this.instance.request({ ...config, method: "POST"})
  }
}

export default new liRequest(BASE_URL, TIMEOUT)