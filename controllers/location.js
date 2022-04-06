const locationModel=require("../models/location");
const location=(req,res)=>{
    const body=req.body;
    locationModel.location(body,(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({
                message:result[0][0].msg
            })
        }
    })
};
const getlocation=(req,res)=>{
    locationModel.getlocation((err,result)=>{
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
const getlocationByID=(req,res)=>{
    let id=req.params.id;
    locationModel.getlocationByID(id,(err,result)=>{
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
const getlocationByAreaID=(req,res)=>{
    let id=req.params.id;
    locationModel.getlocationByDistrictID(id,(err,result)=>{
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
const getlocationByDistrictID=(req,res)=>{
    let id=req.params.id;
    locationModel.getlocationByDistrictID(id,(err,result)=>{
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
const getlocationByRegionID=(req,res)=>{
    let id=req.params.id;
    locationModel.getlocationByRegionID(id,(err,result)=>{
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
const getlocationByZoneID=(req,res)=>{
    let id=req.params.id;
    locationModel.getlocationByZoneID(id,(err,result)=>{
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
    location,
    getlocation,
    getlocationByID,
    getlocationByAreaID,
    getlocationByDistrictID,
    getlocationByRegionID,
    getlocationByZoneID
}