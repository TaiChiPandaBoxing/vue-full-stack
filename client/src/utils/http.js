import axios from 'axios'
import qs from 'qs'
import router from '../router'
const http = axios.create({
  timeout: 5000,
  responseType: 'json',
  // withCredentials: true, // 是否允许带cookie这些
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

if (process.env.NODE_ENV === 'development') {
  http.defaults.baseURL = 'http://localhost:8080' // 'https://www.easy-mock.com/mock/5b45725960e42a620c3fc378/api'
} else if (process.env.NODE_ENV === 'debug') {
  http.defaults.baseURL = 'https://www.easy-mock.com/mock/5b45725960e42a620c3fc378/api'
} else if (process.env.NODE_ENV === 'production') {
  http.defaults.baseURL = 'https://www.easy-mock.com/mock/5b45725960e42a620c3fc378/api'
}

// 请求时的拦截
http.interceptors.request.use(function (config) {
  // 发送请求之前做一些处理
  config.data = qs.stringify({
    ...config.data
  })
  return config
}, function (error) {
  // 当请求异常时做一些处理
  return Promise.reject(error)
})

// 响应时拦截
http.interceptors.response.use(function (response) {
  // 返回响应时做一些处理
  if (response.data.ErrorCode === 2) {
    router.push({
      path: '/login',
      query: { redirect: router.currentRoute.fullPath } // 从哪个页面跳转
    })
  }
  return response
}, function (error) {
  // 当响应异常时做一些处理
  return Promise.reject(error)
})

export function httpGet (url, params = {}) {
  return new Promise((resolve, reject) => {
    http.get(url, {
      params: params
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
export function httpPost (url, data = {}) {
  console.log(data)
  return new Promise((resolve, reject) => {
    http.post(url, data).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}
