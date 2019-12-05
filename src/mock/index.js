import { mock } from 'mockjs'
// 格式： Mock.mock( url, post/get , 返回的数据)；
// url是一个可自定义的url，只要符合http规范即可
mock('http://127.0.0.1:8080/hello', 'get', require('./json/hello'))
