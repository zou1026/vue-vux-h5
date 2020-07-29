import axios from 'axios'
import CryptoJS from 'crypto-js'
import router from "../router";

// 实例化 Axios
const Axios = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 20 * 1000,
    headers: {}
})

// 设置 POST 请求方式为 form-data
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded';

// Request 拦截器
Axios.interceptors.request.use(config => {
    // UUID 算法
    const b = a => a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b)
        // 获取时间戳并设置 Token、req_sign、para_sign
    const uuid = b()
    const key = '.@95141.3eviluvo'
    const iv = CryptoJS.enc.Latin1.parse(key)
    const timestamp = +new Date()
    const paraKey = '.@95141.3eviluvo'
    let data = {}

    if (config.method.toUpperCase() === 'POST' || config.method.toUpperCase() === 'PUT') {
        for (let v of Object.keys(config.data).sort((a, b) => a.charCodeAt() - b.charCodeAt())) {
            data[v] = config.data[v];
        }
    }

    // 加密验证
    config.headers['token'] = sessionStorage.getItem('user_token') || localStorage.getItem('user_token')

    // config.headers['req_sign'] = CryptoJS.AES.encrypt(uuid + key + timestamp, CryptoJS.enc.Latin1.parse(key), {iv,mode: CryptoJS.mode.CBC,padding: CryptoJS.pad.ZeroPadding}).toString();
    // config.headers['para_sign'] = CryptoJS.MD5(qs.stringify(data) + paraKey).toString();

    config.data = {
        timestamp: +new Date(),
        deviceImei: '',
        deviceOsType: '',
        DeviceOsVersion: '',
        data
    }



    return config
}, error => {
    // 错误处理
    console.error(error)
    Promise.reject(error)
})

// Response 拦截器
Axios.interceptors.response.use(response => {
    // 处理接收数据
    const res = response.data
        // if (res.code === '0000') {
        //     return res;
        // } else {
        //     console.error(res.msg, res);
        //     Promise.reject(res.msg);
        // }
    if (res.code !== '0000') {
        if(res.code =='4001') {
            localStorage.clear();
            sessionStorage.clear();
            router.replace({
                path: '/user/login',
            });
        }
        console.error(res.msg)
    }
    return res
}, error => {
    // 错误处理
    console.error(error)
    Promise.reject(error)
})

export default Axios