<template>
  <Header/>
  <Aside/>
  <router-view/>
</template>
<script>
import Aside from '@/components/Aside.vue'
import Header from '@/components/Header.vue'
export default {
  components: {
    Aside,
    Header
  },
  data () {
    return {
    }
  },
}
</script>
