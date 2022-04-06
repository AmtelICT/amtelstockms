<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Add Location</h1>
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
        <form @submit.prevent="location">
          <div class="card">
            <div class="card-body">
              <div class="row mb-2">
                <div class="col-md-12">
                  <i class="fas fa-arrow-left float-right" @click="this.$router.go(-1)"></i>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="name">Location Type {{formData.locationType}}</label>
                    <select  v-model="formData.locationType" class="form-control select2" id="locationType" style="width: 100%;" required>
                      <option value="">Select Location Type</option>
                      <option v-for="(location,index) in locationTypeList" :value="location.id">{{location.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label for="name">Location Name</label>
                    <input type="text" v-model="formData.name" class="form-control" id="select2" placeholder="Enter Area Name" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Zone Name {{formData.zone}}</label>
                    <select  v-model="formData.zone" class="form-control select2" id="zone" style="width: 100%;" required>
                      <option value="">Select Zone</option>
                      <option v-for="(zone,index) in getZones" :value="zone.id">{{zone.name}}</option>
                    </select>
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Region Name {{formData.region}}</label>
                    <select  v-model="formData.region" class="form-control select2 " id="region" style="width: 100%;" required>
                      <option value="">Select Region</option>
                      <option v-for="(region,index) in regionsByZone" :value="region.id">{{region.region_name}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">District Name {{formData.district}}</label>
                    <select  v-model="formData.district" class="form-control select2 " id="district" style="width: 100%;" required>
                      <option value="">Select District</option>
                      <option v-for="(district,index) in districtsByRegion" :value="district.id">{{district.name}}</option>
                    </select>
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Area Name {{formData.area}}</label>
                    <select  v-model="formData.area" class="form-control select2 " id="area" style="width: 100%;" required>
                      <option value="">Select Area</option>
                      <option v-for="(area,index) in areasByDistrict" :value="area.id">{{area.name}}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="description">Latitude</label>
                    <input type="text" v-model="formData.latitude" class="form-control" id="description" placeholder="Enter Latitude">
                  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="description">Longitude</label>
                    <input type="text" v-model="formData.longitude" class="form-control" id="description" placeholder="Enter Longitude">
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
                <div class="col-md-6">
                </div>
                <div class="col-md-3 ">
                  <button type="reset" class="btn btn-default btn-block float-right sys-cancel mb-3 mb-lg-0 mb-xl-0">Cancel</button>
                </div>
                <div class="col-md-3">
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
import { mapGetters } from 'vuex'
import $ from "jquery"
export default {
    props:['id'],
    name: 'addLocation',
    data(){
        return{
          locationTypeList:[],
          regionsByZone:[],
          districtsByRegion:[],
          areasByDistrict:[],

          locationTypeSelect2:null,
          zoneSelect2:null,
          regionSelect2:null,
          districtSelect2:null,
          areaSelect2:null,

          alert:null,
          modal:null,
          formData:{
            id:this.id,
            locationType:'',
            name:'',
            zone:'',
            region:'',
            district:'',
            area:'',
            latitude:'',
            longitude:'',
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
    methods:{
      async filterRegions(){
        if(this.formData.zone){
          this.regionsByZone=[];
          let url=`${process.env.BACKEND_URL}/getRegionsByZone/${this.formData.zone}`;
          let response=await axios.get(url);
          this.regionsByZone=response.data.message;
        }
      },
      async filterDistricts(){
        if(this.formData.region){
          this.districtsByRegion=[];
          let url=`${process.env.BACKEND_URL}/getDistrictByRegionID/${this.formData.region}`;
          let response=await axios.get(url);
          this.districtsByRegion=response.data.message;
        }
      },
      async filterAreas(){
        if(this.formData.district){
          this.areasByDistrict=[];
          let url=`${process.env.BACKEND_URL}/getareabydistrictid/${this.formData.district}`;
          let response=await axios.get(url);
          this.areasByDistrict=response.data.message;
        }
      },
      async location(){
        let self=this;
        await axios.post(`${process.env.BACKEND_URL}/location`, {
          id:this.formData.id,
          location_type:this.formData.locationType,
          area_id:this.formData.area,
          name:this.formData.name,
          latitude:this.formData.latitude,
          longitude:this.formData.longitude,
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
                self.formData.locationType='';
                self.formData.zone='';
                self.formData.region='';
                self.formData.district='';
                self.formData.area='';
                self.formData.name='';
                self.formData.description='';
                self.regionsByZone=[],
                self.districtsByRegion=[]
                self.areasByDistrict=[]
                self.formData.latitude='';
                self.formData.longitude=''
                $('#zone').val('');
                $('#zone').trigger('change');
                $('#locationType').val('');
                $('#locationType').trigger('change');
            }
          else{
            self.responseMessage.icon='fas fa-exclamation-triangle';
            self.responseMessage.color='alert-'+message[0];
          }
        })
        self.alert = new Alert(this.$refs.alertMessage);
        setTimeout(function(){
          if(self.$route.params.id != 0 && self.$route.name =='addBranch' && self.responseMessage.messageType=='success'){
            self.$router.go(-1);
          }
        },5000);
      },
    },
    async mounted(){
      const locationType=await axios.get(`${process.env.BACKEND_URL}/getLocationType`);
      this.locationTypeList=locationType.data.message;
      if(this.id !=0){
        let url=`${process.env.BACKEND_URL}/getlocationbyid/${this.id}`;
        var response=await axios.get(url);
        this.formData.name=response.data.message.name;
        this.formData.zone=response.data.message.zone_id;
        $('#zone').val(this.formData.zone);
        this.filterRegions();
        this.formData.region=response.data.message.region_id;
        $('#region').val(this.formData.region);
        this.filterDistricts();
        this.formData.district=response.data.message.district_id;
        $('#district').val(this.formData.district);
        this.filterAreas();
        this.formData.area=response.data.message.area_id
        $('#area').val(this.formData.area);
        this.formData.latitude=response.data.message.latitude;
        this.formData.longitude=response.data.message.longitude;
        this.formData.description=response.data.message.description;
      }
      let vm=this;

      this.locationTypeSelect2=$("#locationType")
        .select2().on("change",function(){
        vm.formData.locationType=this.value;
      })
      this.zoneSelect2=$('#zone')
        .select2().on("change", function() {
        vm.formData.zone=this.value;
        vm.formData.region='';
        vm.filterRegions();
      });
      this.regionSelect2=$('#region')
        .select2().on("change", function() {
        vm.formData.region=this.value;
        vm.formData.district='';
        vm.filterDistricts();
      });
      this.districtSelect2=$('#district')
        .select2().on("change", function() {
        vm.formData.district=this.value;
        vm.formData.area='';
        vm.filterAreas();
      });
       this.areaSelect2=$('#area')
        .select2().on("change", function() {
        vm.formData.area=this.value;
      });
    },
    computed:{
      ...mapGetters(["getZones","getRegions"]),
    },
}
</script>
