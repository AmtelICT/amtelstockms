import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ZoneList from '../views/Zone.vue'
import addZone from '../components/addZone'


import RegionList from "../views/Region.vue"
import addRegion from "../components/addRegion.vue"

import DistrictList from "../views/District.vue"
import addDistrict from "../components/addDistrict.vue"

import AreaList from "../views/Area.vue"
import addArea from "../components/addArea.vue"

import BranchList from "../views/Branch.vue"
import addBranch from "../components/addBranch.vue"
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
  },
  {
    path:"/district-list",
    name:"DistrictList",
    component:DistrictList,
  },
  {
    path:"/addDistrict/:id",
    name:"addDistrict",
    component:addDistrict,
    props:true
  },
  {
    path:"/area-list",
    name:"AreaList",
    component:AreaList,
  },
  {
    path:"/addArea/:id",
    name:"addArea",
    component:addArea,
    props:true
  },
  {
    path:"/branch-list",
    name:"BranchList",
    component:BranchList
  },
  {
    path:"/addBranch/:id",
    name:"addBranch",
    component:addBranch,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
