import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import login from './modules/login'
import roomList from './modules/roomList'
import wxSignUrl from './modules/wx'
import getters from './getters';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        login,
        roomList,
        wxSignUrl
    },
    getters
})

export default store