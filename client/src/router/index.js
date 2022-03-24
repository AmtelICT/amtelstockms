import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ZoneList from '../views/Zone.vue'
import addZone from '../components/addZone'


import RegionList from "../views/Region.vue"
import addRegion from "../components/addRegion.vue"
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
  },
  {
    path:'/region-list',
    name:'RegionList',
    component:RegionList
  },
  {
    path:"/addRegion/:id",
    name:"addRegion",
    component:addRegion,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
