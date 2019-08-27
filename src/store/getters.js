const getters = {
    direction: state => state.app.direction,

    user_info: state => {
        if (Object.keys(state.login.user_info).length !== 0) {
          return state.login.user_info
        } else {
          if (!!window.localStorage.getItem('user_info')) {
            return JSON.parse(window.localStorage.getItem('user_info'))
          } else {
            return undefined
          }
        }
      },
      token: state => state.login.token,
    
      unit_id: state =>  {
        if (Object.keys(state.roomList.unit_id).length !== 0) {
          return state.roomList.unit_id
        } else {
          if (!!window.localStorage.getItem('unit_id')) {
            return window.localStorage.getItem('unit_id')
          } else {
            return ''
          }
        }
      },
      location_name: state => {
        if (Object.keys(state.roomList.location_name).length !== 0) {
          return state.roomList.location_name
        } else {
          if (!!window.localStorage.getItem('location_name')) {
            return JSON.parse(window.localStorage.getItem('location_name'))
          } else {
            return {}
          }
        }
      },
      getWechatSignUrl: state => state.wxSignUrl,
      room_object:state =>state.roomList.room_object,
}
export default getters