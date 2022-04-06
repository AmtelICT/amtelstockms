import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ZoneList from '../views/Zone.vue'
import addZone from '../forms/addZone'


import RegionList from "../views/Region.vue"
import addRegion from "../forms/addRegion.vue"

import DistrictList from "../views/District.vue"
import addDistrict from "../forms/addDistrict.vue"

import AreaList from "../views/Area.vue"
import addArea from "../forms/addArea.vue"


import LocationTypeList from "../views/LocationType.vue"
import addLocationType from "../forms/addLocationType.vue"


import LocationList from "../views/Location.vue"
import addLocation from "../forms/addLocation.vue"
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
    path:"/location-type-list",
    name:"LocationTypeList",
    component:LocationTypeList
  },
  {
    path:"/addLocationType/:id",
    name:"addLocationType",
    component:addLocationType,
    props:true
  },
  {
    path:"/location-list",
    name:"LocationList",
    component:LocationList
  },
  {
    path:"/addLocation/:id",
    name:"addLocation",
    component:addLocation,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
