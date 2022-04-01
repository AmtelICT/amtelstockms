const zoneController=require("../controllers/zone");
const regionController=require("../controllers/region");
const districtController=require("../controllers/district");
const areaController=require("../controllers/area");
const hqcontroller=require("../controllers/hq_office");
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
    app.get("/getAreaByDistrictID/:id",areaController.getAreaByID);
    app.get("/getAreaByRegionID/:id",areaController.getAreaByID);
    app.get("/getAreaByZoneID/:id",areaController.getAreaByID);
    //HQ Office
    app.post("/hq",hqcontroller.hq);
    app.get("/getHq",hqcontroller.getHq);
    app.get("/getHqByID/:id",hqcontroller.getHqByAreaID);
    app.get("/getHqByAreaID/:id",hqcontroller.getHqByDistrictID);
    app.get("/getHqByDistrictID/:id",hqcontroller.getHqByDistrictID);
    app.get("/getHqByRegionID/:id",hqcontroller.getHqByRegionID);
    app.get("/getHqByZoneID/:id",hqcontroller.getHqByZoneID);

}
exports.routes=routes;