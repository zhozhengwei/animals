//axiosInstance.js
//导入axios
import axios from 'axios'

// axios.interceptors.reponse.use(res => {
//     if (res.code ==0 || res.code == 200) {
//        return Promise.resolve(res)
//     }
//     return Promise.reject(res)
//   }, err => {
//       return Promise.reject(err)
//   })
 
//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const API = axios.create({
	// baseUrl:'http://47.103.34.147:10056/api/', //请求后端数据的基本地址，自定义
    timeout: 8000,                  //请求超时设置，单位ms
})

//导出我们建立的axios实例模块，ES6 export用法
// headers: {
    //     'Content-Type': 'application/json',
    //     'token': localStorage.getItem('token')
    // }
export default API
