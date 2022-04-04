<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Branch List</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">Registrations</li>
              <li class="breadcrumb-item active">Branches</li>
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
                <router-link :to="{name:'addBranch',params:{id:0}}" class="btn btn-flat btn-primary mb-2 float-right">
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
                            <th>Branch Name</th>
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
                        <tr v-for="(branch,index) in branchList">
                            <td>{{index+1}}</td>
                            <td>{{branch.name}}</td>
                            <td>{{branch.area_name}}</td>
                            <td>{{branch.district_name}}</td>
                            <td>{{branch.region_name}}</td>
                            <td>{{branch.zone_name}}</td>
                            <td>{{branch.description}}</td>
                            <td>{{branch.latitude}}</td>
                            <td>{{branch.longitude}}</td>
                            <td>{{branch.date}}</td>
                            <td><router-link :to="{name:'addBranch',params:{id:branch.id}}" class="btn btn-primary" type="button"><i class="fas fa-edit"></i></router-link></td> 
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
  name: 'BranchList',
  data(){
    return{
      branchList:[]
    }
  },
  async mounted(){
    let url=`${process.env.BACKEND_URL}/getbranch`;
    const response=await axios.get(url);
    console.log(response);
    this.branchList=response.data.message;
    for(let i=0;i<this.branchList.length;i++){
      this.branchList[i].date=moment(this.branchList[i].date).format("DD-MM-YYYY");
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
