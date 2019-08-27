import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
// 路由Layout组件
import Layout from '@/components/layout/transition.vue'
// 首页
import Home from '@/views/home/Index.vue'
// 用户相关
import Login from '@/views/user/login/Index.vue'
// import Forget from '@/views/user/forget/Index.vue'
import Setting from '@/views/user/setting/Index.vue'
import ResetPwd from '@/views/user/reset/Index.vue'

//消息列表
import MessageList from '@/views/message/Index'

// 房间相关
// 集中式
import Room from '@/views/room'
import RoomList from '@/views/room/roomList'
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
      path: '/user',//用户信息
      component: Layout,
      children: [
          { path: 'login', component: Login },
          // { path: 'forget', component: Forget },
          { path: 'setting', component: Setting },
          { path: 'resetPwd', component: ResetPwd }
      ]
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/message',//消息
      component: Layout,
      children: [
          { path: 'list', component: MessageList},

      ]
  },
  {
    path: '/room',
    component: Layout,
    redirect: '/room/list',
    children: [
        { path: 'list', component: RoomList },
        // { path: 'detail/:id', component: RoomDetail },
        // { path: 'tertiaryDetail', component: TertiaryRoomDetail },
    ]
},
  ]
})

router.afterEach((to, from) => {
  if(store.state.direction !== 'tip')
    store.commit('SET_DIRECTION', 'tip');
})

export default router;
