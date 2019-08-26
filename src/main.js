import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/filters'
import "babel-polyfill"
import 'lib-flexible/flexible'
import '@/assets/scss/index.scss'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'

import FastClick from 'fastclick'
FastClick.attach(document.body)

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import transition from '@/components/layout/transition';
Vue.component('lg-transition', transition);

Vue.config.productionTip = false
// 全局注册
import { XHeader,XButton,Toast,Confirm} from 'vux'
import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)
Vue.component('x-header', XHeader)
Vue.component('x-button', XButton)
Vue.component('toast', Toast)
Vue.component('confirm', Confirm)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
