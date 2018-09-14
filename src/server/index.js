/**
 * Created by soft on 2018/1/3.
 * 作者：Lvjr
 * 项目请求统一处理
 * 请求方式支持 get , post
 *
 */

import router from '../router'
import axios from 'axios'

import config from './config'

// axios默认配置请求的api基础地址
axios.defaults.baseURL = (process.env.NODE_ENV !== 'production' ? config.dev.httpUrl : config.build.httpUrl)
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 30000 // 超时设置30s
export default ((url = '', data = {}) => {
  return {
    get (url, data) {
      return new Promise((resolve, reject) => {
        axios.get(url, {
          withCredentials: false,
          params: data
        }).then(function (response) {
          if (response.data.status === 1101) {
            router.push({path: '/login'})
          } else if (response.data.status === 200) {
            resolve(response.data)
          } else {
            resolve(response.data)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    },
    post (url, data) {
      return new Promise((resolve, reject) => {
        axios.post(url, data, {
          withCredentials: false
          // headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
        }).then(function (response) {
          if (response.data.status === 1101) {
            router.push({path: '/login'})
          } else if (response.data.status === 200) {
            resolve(response.data)
          } else {
            resolve(response.data)
          }
        }).catch(function (error) {
          reject(error)
        })
      })
    }
  }
})()
