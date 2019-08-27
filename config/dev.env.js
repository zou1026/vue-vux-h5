var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API:'"http://new.fanjianhome.cn:8088/ovulive/employee/"',
    QINIU_URL: '"http://static.inzhiyu.com/"'
})