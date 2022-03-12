const zoneController=require("../controllers/zone");
const regionController=require("../controllers/region");
const routes=(app)=>{
    //home 
    app.get('/',(req,res)=>{
        res.send("welcome");
    });

    //zones
    app.post('/zone',zoneController.zone);
    app.get('/getZone',zoneController.getZone);
    //regions
    app.post("/region",regionController.region);
    app.get("/getRegions/",regionController.getRegions);
    app.get("/getRegionsById/:id",regionController.getRegions);
}
exports.routes=routes;