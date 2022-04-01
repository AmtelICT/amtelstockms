<template>
  <Header/>
  <Aside/>
  <router-view/>
</template>
<script>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    Aside,
    Header
  },
  data () {
    return {
    }
  },
  mounted(){
    this.loadZones();
    this.loadRegions();
  },
  methods:{
    ...mapActions(['loadZones','loadRegions'])
  }
}
</script>
