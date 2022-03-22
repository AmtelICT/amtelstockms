<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Add Zone</h1>
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
        <form @submit.prevent="zone">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Zone Name</label>
                    <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="Enter Zone Name">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" v-model="formData.description" class="form-control" id="description" placeholder="Enter Description">
                  </div>
                </div> 
              </div>
            </div>
            <div class="card-footer">
              <div class="row">
                <div class="col-6">
                </div>
                <div class="col-3">
                  <button type="reset" class="btn btn-default btn-block float-right sys-cancel">Cancel</button>
                </div>
                <div class="col-3">
                  <button type="submit" class="btn btn-block float-right btn-success">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form>  
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    name: 'addZone',
    data(){
        return{
          formData:{
            id:this.id,
            name:'',
            description:''
          }
        }
    },
    async beforeMount(){
      if(this.id !=0){
        let url=`/api/getZoneById/${this.id}`;
        alert(url);
        // var response=await axios.get(url);
        // this.formData.name=response.data.message[0].name;
        // this.formData.description=response.data.message[0].description;
      }
    },
    methods:{
      zone(){
        axios.post('http://localhost:5000/zone', {
          id:this.formData.id,
          name:this.formData.name,
          description:this.formData.description,
          user_id:"1"
        }).then(function(response){
          console.log(response);
        })
      }
    }
}
</script>
