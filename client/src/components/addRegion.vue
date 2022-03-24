<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Add Region</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">Registrations</li>
              <li class="breadcrumb-item active">Regions</li>
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
              <div class="row mb-2">
                <div class="col-md-12">
                  <i class="fas fa-arrow-left float-right" @click="this.$router.go(-1)"></i>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="name">Region Name</label>
                    <input type="text" v-model="formData.regionName" class="form-control" id="name" placeholder="Enter Zone Name" required>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label for="name">Region Name</label>
                    <select class="form-control select2" id="airline" style="width: 100%;" name="airline">
                        <option value="">Select Airline</option>
                        <option value="">Welcome</option>
                        <option value="">Common</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-4">
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
        <div ref="alertMessage" v-if="responseMessage.show" v-bind:class="responseMessage.color" class="alert fade show alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="alert.close()">
            <span aria-hidden="true">&times;</span>
          </button>
          <h5><i :class="responseMessage.icon" class="icon"></i> Message</h5>
          {{responseMessage.message}}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Alert} from 'bootstrap'
import axios from 'axios'
import { mapState } from 'vuex'
import $ from "jquery"
import store from '../store'
$(document).ready(function () {
    $('.select2').select2();
        //Initialize Select2 Elements
    $('.select2bs4').select2({
        theme: 'bootstrap4'
    });
});
export default {
    props:['id'],
    name: 'addRegion',
    data(){
        return{
            zoneList:store.state.zones,
          alert:null,
          modal:null,
          formData:{
            id:this.id,
            regionName:'',
            zone:[],
            name:'',
            description:''
          },
          responseMessage:{
            show:false,
            message:'',
            messageType:'',
            icon:'',
            color:'',
          }
        }
    },
    async beforeMount(){ 
      if(this.id !=0){
        let url=`http://localhost:5000/getZoneById/${this.id}`;
        var response=await axios.get(url);
        this.formData.name=response.data.message[0].name;
        this.formData.description=response.data.message[0].description;
      }
      // this.formData.zone=zones;
    },
    mounted(){
    },
    methods:{
      async zone(){
        let self=this;
        await axios.post('http://localhost:5000/zone', {
          id:this.formData.id,
          name:this.formData.name,
          description:this.formData.description,
          user_id:"1"
        }).then(function(response){
          let message=response.data.message.split("|");
          self.responseMessage.message=message[1];
          self.responseMessage.messageType=message[0];
          self.responseMessage.show=true;
          if(message[0] =='success'){
            self.responseMessage.icon='fas fa-check';
            self.responseMessage.color='alert-'+message[0];
            self.formData.id=0;
            self.formData.name='';
            self.formData.description=''
          }
          else{
            self.responseMessage.icon='fas fa-exclamation-triangle';
            self.responseMessage.color='alert-'+message[0];
          }
          console.log(message);
        })
        self.alert = new Alert(this.$refs.alertMessage);
      },
      close(){
      }
    },
    // computed:{
    //   ...mapState(['zoneList'])
    // },
}
</script>
