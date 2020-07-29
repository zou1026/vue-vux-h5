import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "babel-polyfill"
import 'lib-flexible/flexible'

import FastClick from 'fastclick'
FastClick.attach(document.body)
import transition from '@/components/layout/transition';
Vue.component('lg-transition', transition);

Vue.config.productionTip = false
// 全局注册

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
