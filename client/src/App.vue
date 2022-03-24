<template>
  <Header/>
  <Aside/>
  <router-view/>
</template>
<script>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
import store from "./store"
import axios from 'axios'
import moment from 'moment'
export default {
  components: {
    Aside,
    Header
  },
  data () {
    return {
    }
  },
  async created(){
    
    const response=await axios.get("http://localhost:5000/getZone");
    store.state.zones=response.data.message;
    for(let i=0;i<store.state.zones.length;i++){
      store.state.zones[i].date=moment(store.state.zones[i].date).format("DD-MM-YYYY");
    }
    console.log(store.state.zones);
  }
}
</script>
