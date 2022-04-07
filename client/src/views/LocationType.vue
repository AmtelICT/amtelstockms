<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Location Type List</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">Registrations</li>
              <li class="breadcrumb-item active">Location Types</li>
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
                <router-link :to="{name:'addLocationType',params:{id:0}}" class="btn btn-flat btn-primary mb-2 float-right">
                  <i class="fas fa-plus pr-2"></i>Create New
                </router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <table id="table-list" class="table table-hover">
                  <thead>
                  <tr>
                    <th>S NO</th>
                    <th>Location Type Name</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(locationType,index) in LocationTypeList">
                    <td>{{index +1}}</td>
                    <td>{{locationType.name}}</td>
                    <td>{{locationType.date}}</td>
                    <th><router-link :to="{name:'addLocationType',params:{id:locationType.id}}" class="btn btn-primary" type="button"><i class="fas fa-edit"></i></router-link></th>
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
  name: 'LocationTypeList',
  data(){
    return{
      LocationTypeList:[]
    }
  },
  async mounted(){
    let url=process.env.BACKEND_URL;
    const response=await axios.get(`${url}/getLocationType`);
    this.LocationTypeList=response.data.message;
    for(let i=0;i<this.LocationTypeList.length;i++){
      this.LocationTypeList[i].date=moment(this.LocationTypeList[i].date).format("DD-MM-YYYY");
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
