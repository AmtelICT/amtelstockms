import { createStore } from 'vuex'
import axios from "axios"
export default createStore({
  state: {
    zones:[]
  },
  mutations: {
    loadZones(state,payload){
      // console.log(payload);
      state.zones=payload;
      // console.log(state.zones)
    }
  },
  actions: {
    async loadZones(context){
      const response=await axios.get("http://localhost:5000/getZone");
      // console.log();
      context.commit("loadZones",response.data.message);
    }
    
  },
  getters:{
    getZones:function(state){
      return state.zones;
    }
  },
  modules: {
  }
})
