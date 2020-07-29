import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

// 首页
import Home from '@/views/home/Index.vue'
// 用户相关
Vue.use(Router)

Router.prototype.goBack = function (val) {
  store.commit('SET_DIRECTION', val);
  if(store.state.direction == 'tip'){
    window.history.go(-1);
  }else{
    setTimeout(()=>{window.history.go(-1)},50);
  }
}

const router =  new Router({
  // mode: 'history',
  // base: '/zoushiyang/',
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
  ]
})

router.afterEach((to, from) => {
  if(store.state.direction !== 'tip')
    store.commit('SET_DIRECTION', 'tip');
})

export default router;
