const login = {
    state: {
        user_info: {},
        token: '',
    },
    mutations: {
        SET_USER_INFO: (state, user_info) => {
            state.user_info = user_info
        },
        SET_TOKEN: (state, token) => {
            state.token = token
            window.localStorage.setItem('user_token', token)
        }
    },
    actions: {
        saveUserInfo({ commit }, userInfo) {
            commit('SET_USER_INFO', userInfo)
            let temp = JSON.stringify(userInfo)
            localStorage.setItem('user_info', temp)
        },
        saveUserToken({ commit }, userInfo) {
            commit('SET_TOKEN', userInfo.token)
        }
    }
}

export default login
