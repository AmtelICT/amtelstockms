import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ZoneList from '../views/Zone.vue'
import addZone from '../components/addZone'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/zone-list',
    name:'ZoneList',
    component:ZoneList
  },
  {
    path:"/addZone/:id",
    name:"addZone",
    component:addZone,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
