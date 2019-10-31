import axios from 'axios'
import {MessageBox, Message} from 'element-ui'
import baseURL from '@/api/base.js'
// Vue.prototype.$axios=axios

const service = axios.create({
   // baseURL: 'http://47.92.159.136:8011/', //线上
   baseURL: baseURL, //测试
   timeout: 5000

})

// http request 请求拦截器
service.interceptors.request.use(config => {
  // console.log("看看运行没11111")
  let pathname = location.hash;
  // console.log(pathname)
  if(localStorage.getItem('token')){
    // console.log("看看运行没22222")
    if(pathname != '#/' &&  pathname != '#/login'){
      config.headers.Authorization = localStorage.getItem('token');
      // console.log("看看运行没333333")
    }
  }
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// http response 响应拦截器
service.interceptors.response.use(response => {

  if (response.data.rtnCode != '1') {
    Message({
      message: response.data.rtnMsg || 'Error',
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(new Error(response.data.rtnMsg || 'Error'));
  } else {
    return response
  }

},error => {
  // if (error.response.status) {
  //   console.log(error)
  //    switch (error.response.status) {
  //        // 返回401，清除token信息并跳转到登录页面
  //        case 401:
  //        localStorage.removeItem('token');
  //        router.replace({
  //            path: '/login'
  //            //登录成功后跳入浏览的当前页面
  //            // query: {redirect: router.currentRoute.fullPath}
  //        })
  //    }
  Message({
    message: error.message,
    type: 'error',
    duration: 2 * 1000
  })
  // 返回接口返回的错误信息
  return Promise.reject(error);
  // }
});

export default service;

