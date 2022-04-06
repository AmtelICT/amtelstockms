const zoneController=require("../controllers/zone");
const regionController=require("../controllers/region");
const districtController=require("../controllers/district");
const areaController=require("../controllers/area");
const locationtypecontroller=require("../controllers/location_type");
const hqcontroller=require("../controllers/hq_office");
const locationcontroller=require("../controllers/location");
const routes=(app)=>{
    //home 
    app.get('/',(req,res)=>{
        res.send("welcome");
    });

    //zones
    app.post('/zone',zoneController.zone);
    app.get('/getZone',zoneController.getZone);
    app.get("/getZoneById/:id",zoneController.getZoneByID);
    //regions
    app.post("/region",regionController.region);
    app.get("/getRegions/",regionController.getRegions);
    app.get("/getRegionsById/:id",regionController.getRegionsByID);
    app.get("/getRegionsByZone/:id",regionController.getRegionsByZone);
    //districts
    app.post("/district",districtController.district);
    app.get("/getDistrict/",districtController.getDistrict);
    app.get("/getDistrictByID/:id",districtController.getDistrictByID);
    app.get("/getDistrictByRegionID/:id",districtController.getDistrictByRegionID);
    app.get("/getDistrictByZoneID/:id",districtController.getDistrictByZoneID);
    //area
    app.post("/area",areaController.area);
    app.get("/getarea",areaController.getArea);
    app.get("/getAreaByID/:id",areaController.getAreaByID);
    app.get("/getAreaByDistrictID/:id",areaController.getAreaByDistrictID);
    app.get("/getAreaByRegionID/:id",areaController.getAreaByRegionID);
    app.get("/getAreaByZoneID/:id",areaController.getAreaByZoneID);
    //zones
    app.post('/locationType',locationtypecontroller.locationType);
    app.get('/getLocationType',locationtypecontroller.getlocationType);
    app.get("/getLocationTypeById/:id",locationtypecontroller.getlocationTypeByID);
    //HQ Office
    app.post("/hq",hqcontroller.hq);
    app.get("/getHq",hqcontroller.getHq);
    app.get("/getHqByID/:id",hqcontroller.getHqByAreaID);
    app.get("/getHqByAreaID/:id",hqcontroller.getHqByDistrictID);
    app.get("/getHqByDistrictID/:id",hqcontroller.getHqByDistrictID);
    app.get("/getHqByRegionID/:id",hqcontroller.getHqByRegionID);
    app.get("/getHqByZoneID/:id",hqcontroller.getHqByZoneID);
    //Branch
    app.post("/location",locationcontroller.location);
    app.get("/getLocation",locationcontroller.getlocation);
    app.get("/getLocationByID/:id",locationcontroller.getlocationByID);

}
exports.routes=routes;