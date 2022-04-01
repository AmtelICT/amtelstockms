import { createStore } from 'vuex'
import axios from "axios"
export default createStore({
  state: {
    zones:[],
    regions:[]
  },
  mutations: {
    loadZones(state,payload){
      state.zones=payload;
    },
    loadRegions(state,payload){
      state.regions=payload;
    }
  },
  actions: {
    async loadZones(context){
      const response=await axios.get("http://localhost:5000/getZone");
      context.commit("loadZones",response.data.message);
    },
    async loadRegions(context){
      const response=await axios.get("http://localhost:5000/getRegions");
      context.commit("loadRegions",response.data.message);
    }
    
  },
  getters:{
    getZones:function(state){
      return state.zones;
    },
    getRegions:function(state){
      return state.regions;
    }
  },
  modules: {
  }
})
