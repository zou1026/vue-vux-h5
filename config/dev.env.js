var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    //BASE_API:'"http://www.1pinhome.com/ovulive/employee/"',
  BASE_API:'"http://new.fanjianhome.cn:8088/ovulive/employee/"',
  // BASE_API:'"http://kt-test.fanjianhome.com/"',
    // QINIU_URL: '"http://phic9grjs.bkt.clouddn.com/"'
    QINIU_URL: '"http://static.inzhiyu.com/"'
})