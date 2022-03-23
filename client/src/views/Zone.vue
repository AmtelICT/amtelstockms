<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Zone List</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">Registrations</li>
              <li class="breadcrumb-item active">Zones</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <section class="content">
      <div class="container-fluid">       
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <router-link :to="{name:'addZone',params:{id:0}}" class="btn btn-flat btn-primary mb-2 float-right">
                  <i class="fas fa-plus pr-2"></i>Create New
                </router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <table id="example2" class="table table-hover">
                  <thead>
                  <tr>
                    <th>Zone ID</th>
                    <th>Zone Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(zone,index) in zoneList">
                    <td>{{zone.id}}</td>
                    <td>{{zone.name}}</td>
                    <td>{{zone.description}}</td>
                    <td>{{zone.date}}</td>
                    <th><router-link :to="{name:'addZone',params:{id:zone.id}}" class="btn btn-primary" type="button" @click="hello(index)"><i class="fas fa-edit"></i></router-link></th>
                  </tr>
                  </tbody>
                </table>
              </div>
           </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'ZoneList',
  data(){
    return{
      zoneList:[]
    }
  },
  async mounted(){
    const response=await axios.get("http://localhost:5000/getZone");
    this.zoneList=response.data.message;
    for(let i=0;i<this.zoneList.length;i++){
      this.zoneList[i].date=moment(this.zoneList[i].date).format("DD-MM-YYYY");
    }
  },
  methods:{
  }
}
</script>
