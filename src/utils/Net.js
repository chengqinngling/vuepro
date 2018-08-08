/**
 * 网络请求
 * @date 2018-08-08 
 * @author DIEW
 */

import axios from 'axios';
import {AppConfig} from "../config";
import { NetworkException, ResponseException } from "./Exception";

//post和get提交方式api接口列表【定义接口方法映射】
const apiMap = {
    post: { // post请求
      
    },
    get: { // get请求
        getJson: 'getJson1', // 标的列表
    }
};

//自定义配置创建一个新的 axios 实例【HTTP 请求】
console.log(AppConfig.api.baseURL);
const apiAxios = axios.create({
    baseURL:AppConfig.api.baseURL, // api接口根路径,如果在根目录的config/index[dev]中设置了服务器端代理，就为空
    timeout: 8000, // 请求超时限制 单位：毫秒，8秒请求时间
    withCredentials: false, // 是否需要跨域
    headers: { // 发送请求头
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=UTF-8',
    },
    responseType: 'json' // 返回的数据格式
});

/**
 * Add a request interceptor  
 */
apiAxios.interceptors.request.use(function (config) {
    //accept axios config
    console.log("请求参数",config);
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

/**
 * Add a response interceptor
 */
apiAxios.interceptors.response.use(function (response) {
    console.log("请求数据返回");
    //accept axios response
    let data = response.data;
    delete response.data;
    data._response = response;

    // 如果为SUCCESS,FAIL则表示正常
    if (data.retCode == 'SUCCESS' || data.retCode == 'FAIL') {

        return data;

    } else if (data.retCode == 'ERROR') {

        //异常时会触发ResponseException
        return Promise.reject(new ResponseException(data));

    } else {

        return Promise.reject(new ResponseException(data));

    }
}, function (error) {

    // Do something with response error
    return Promise.reject(new NetworkException(error));

});

/**
 * 将上面定义的接口映射转换为Net上的方法
 * @param axiosInstance
 * @param configMap
 * @returns {{}}
 */
function createApiMethod(axiosInstance, configMap) {
    let result = {};

    //循环请求的有哪几种方法[post,get]
    Object.keys(configMap).forEach(method => {

        let dataIds = configMap[method];
        //循环请求方法对象[post,get] 数组
        Object.keys(dataIds).forEach(name => {
            let _dataid = dataIds[name];

            result[name] = function (_param) {
                let payload = {
                    _dataid,
                    _param
                };
                return axiosInstance({
                    url: _dataid,
                    method: method,
                    [method !== 'post' ? 'params' : 'data']: _param
                })
            }
        })
    });

    return result;
}

export default createApiMethod(apiAxios, apiMap);