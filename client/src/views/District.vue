<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">District List</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">Registrations</li>
              <li class="breadcrumb-item active">District</li>
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
                <router-link :to="{name:'addDistrict',params:{id:0}}" class="btn btn-flat btn-primary mb-2 float-right">
                  <i class="fas fa-plus pr-2"></i>Create New
                </router-link>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <table id="example2" class="table table-hover">
                  <thead>
                  <tr>
                    <th>S. NO</th>
                    <th>District Name</th>
                    <th>Region Name</th>
                    <th>Zone Name</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="(district,index) in districtList">
                    <td>{{index+1}}</td>
                    <td>{{district.name}}</td>
                    <td>{{district.region_name}}</td>
                    <td>{{district.zone_name}}</td>
                    <td>{{district.description}}</td>
                    <td>{{district.date}}</td>
                    <td><router-link :to="{name:'addDistrict',params:{id:district.id}}" class="btn btn-primary" type="button"><i class="fas fa-edit"></i></router-link></td> 
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
  name: 'DistrictList',
  data(){
    return{
      districtList:[]
    }
  },
  async mounted(){
    const response=await axios.get("http://localhost:5000/getDistrict");
    this.districtList=response.data.message;
    console.log(this.districtList)
    for(let i=0;i<this.districtList.length;i++){
      this.districtList[i].date=moment(this.districtList[i].date).format("DD-MM-YYYY");
    }
  },
}
</script>
