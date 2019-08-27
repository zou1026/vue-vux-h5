const roomList = {
  state: {
    unit_id: '',
    location_name: {},
    room_object:{}
  },
  mutations: {
    SET_UNIT_ID: (state, unit_id) => {
      state.unit_id = unit_id
      console.log(unit_id)
      window.localStorage.setItem('unit_id', unit_id)
    },
    SET_LOCATION_NAME: (state, location_name) => {
      state.location_list = location_name
      let temp = JSON.stringify(location_name)
      window.localStorage.setItem('location_name', temp)
    },
    SET_ROOM_OBJECT:(state,room_object)=>{
      state.room_object = room_object
    }
  },
  actions: {
    saveUnitId ({commit}, unit_id) {
      commit('SET_UNIT_ID', unit_id)
    },
    saveLocationName({commit},location_name){
      commit('SET_LOCATION_NAME',location_name)
    },
    roomObject({commit},room_object){
      commit('SET_ROOM_OBJECT',room_object)
    }
  }
}
export default roomList