const wxSignUrl = {
    state: {
        wxSignUrl: ""
    },
    mutations: {
        setWechatSignUrl : (state, wxSignUrl) => {
            // 关键点
            // IOS仅记录第一次进入页面时的URL
            // IOS微信切换路由实际URL不变，只能使用第一进入页面的URL进行签名
            const u = navigator.userAgent;
            if ((u.indexOf("iPhone") > -1 || u.indexOf("Mac OS") > -1) && state.wxSignUrl !== '') {
                return;
            }
            state.wxSignUrl = wxSignUrl;
        }
    },
}

export default wxSignUrl
