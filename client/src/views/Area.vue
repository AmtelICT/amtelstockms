<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Area List</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">Registrations</li>
              <li class="breadcrumb-item active">Areas</li>
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
                <router-link :to="{name:'addArea',params:{id:0}}" class="btn btn-flat btn-primary mb-2 float-right">
                  <i class="fas fa-plus pr-2"></i>Create New
                </router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <table id="table-list" class="table table-hover">
                  <thead>
                  <tr>
                    <th>S. NO</th>
                    <th>Area Name</th>
                    <th>District Name</th>
                    <th>Region Name</th>
                    <th>Zone Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Edit</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(area,index) in areaList">
                    <td>{{index+1}}</td>
                    <td>{{area.name}}</td>
                    <td>{{area.district}}</td>
                    <td>{{area.region_name}}</td>
                    <td>{{area.zone_name}}</td>
                    <td>{{area.description}}</td>
                    <td>{{area.date}}</td>
                    <td><router-link :to="{name:'addArea',params:{id:area.id}}" class="btn btn-primary" type="button"><i class="fas fa-edit"></i></router-link></td> 
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
import $ from "jquery";
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'AreaList',
  data(){
    return{
      areaList:[]
    }
  },
  async mounted(){
    const response=await axios.get("http://localhost:5000/getarea");
    console.log(response);
    this.areaList=response.data.message;
    for(let i=0;i<this.areaList.length;i++){
      this.areaList[i].date=moment(this.areaList[i].date).format("DD-MM-YYYY");
    }
    setTimeout(function(){
      $("#table-list").DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": true,
        "ordering": false,
        "info": true,
        "autoWidth": false,
      });
    })
  },
}
</script>
