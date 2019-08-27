import fetch from '@/utils/fetch'

//获取验证码
export function getCaptcha(data) {
    return fetch({
        url: "user/getCaptcha",
        method: "post",
        data
    })
}
// 重置密码
export function resetPwd(data) {
    return fetch({
        url: "user/resetPwd",
        method: "post",
        data
    })
}