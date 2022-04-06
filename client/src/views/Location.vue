<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">location List</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">Registrations</li>
              <li class="breadcrumb-item active">Locations</li>
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
                <router-link :to="{name:'addLocation',params:{id:0}}" class="btn btn-flat btn-primary mb-2 float-right">
                  <i class="fas fa-plus pr-2"></i>Create New
                </router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="table-responsive">
                    <table id="table-list" class="table table-hover text-nowrap">
                        <thead>
                        <tr>
                            <th>S. NO</th>
                            <th>Location Type</th>
                            <th>Location Name</th>
                            <th>Area Name</th>
                            <th>District Name</th>
                            <th>Region Name</th>
                            <th>Zone Name</th>
                            <th>Description</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Date</th>
                            <th>Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(location,index) in locationList">
                            <td>{{index+1}}</td>
                            <td>{{location.locationType}}</td>
                            <td>{{location.name}}</td>
                            <td>{{location.area_name}}</td>
                            <td>{{location.district_name}}</td>
                            <td>{{location.region_name}}</td>
                            <td>{{location.zone_name}}</td>
                            <td>{{location.description}}</td>
                            <td>{{location.latitude}}</td>
                            <td>{{location.longitude}}</td>
                            <td>{{location.date}}</td>
                            <td><router-link :to="{name:'addLocation',params:{id:location.id}}" class="btn btn-primary" type="button"><i class="fas fa-edit"></i></router-link></td> 
                        </tr>
                        </tbody>
                    </table>
                </div>
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
  name: 'locationList',
  data(){
    return{
      locationList:[]
    }
  },
  async mounted(){
    let url=`${process.env.BACKEND_URL}/getlocation`;
    const response=await axios.get(url);
    console.log(response);
    this.locationList=response.data.message;
    for(let i=0;i<this.locationList.length;i++){
      this.locationList[i].date=moment(this.locationList[i].date).format("DD-MM-YYYY");
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
