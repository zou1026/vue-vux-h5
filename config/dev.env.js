var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API:'"http://10.7.0.240:9000/ovulive/employee/"',
    QINIU_URL: '"http://static.inzhiyu.com/"'
})