const zoneModel=require("../models/zone")
const zone=(req,res)=>{
    const body=req.body;
    console.log(body);
    zoneModel.zone(body,(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json({
                message:result
            });
        }
    })
};
const getZone=(req,res)=>{
    zoneModel.getZone((err,result)=>{
        console.log(result);
        if(err){
            res.json(err);
        }
        else{
            res.json({
                message:result[0]
            })
        }
    })
};
const getZoneByID=(req,res)=>{
    id=req.params.id;
    zoneModel.getZoneByID(id,(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({
                message:result
            })
        }
    })
};
module.exports={
    zone,
    getZone,
    getZoneByID
}