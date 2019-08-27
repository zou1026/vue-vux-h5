import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "babel-polyfill"
import 'lib-flexible/flexible'
import '@/assets/scss/index.scss'
import '@/assets/styles/border.css'
import '@/assets/styles/iconfont.css'

import vfilters from "@/filters"
for (let key in vfilters){
    Vue.filter(key, vfilters[key])
}
import FastClick from 'fastclick'
FastClick.attach(document.body)

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import transition from '@/components/layout/transition';
Vue.component('lg-transition', transition);

Vue.config.productionTip = false
// 全局注册
import { XHeader,XButton,Toast,Confirm, Alert} from 'vux'
import  { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)
import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.component('x-header', XHeader)
Vue.component('x-button', XButton)
Vue.component('toast', Toast)
Vue.component('confirm', Confirm)
Vue.component('alert', Alert)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
