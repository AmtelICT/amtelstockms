const areaModel=require("../models/area");
const area=(req,res)=>{
    const body=req.body;
    areaModel.area(body,(err,result)=>{
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
const getArea=(req,res)=>{
    areaModel.getArea((err,result)=>{
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
const getAreaByID=(req,res)=>{
    let id=req.params.id;
    areaModel.getAreaByID(id,(err,result)=>{
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
const getAreaByDistrictID=(req,res)=>{
    let id=req.params.id;
    areaModel.getAreaByDistrictID(id,(err,result)=>{
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
const getAreaByRegionID=(req,res)=>{
    let id=req.params.id;
    areaModel.getAreaByRegionID(id,(err,result)=>{
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
const getAreaByZoneID=(req,res)=>{
    let id=req.params.id;
    areaModel.getAreaByZoneID(id,(err,result)=>{
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
    area,
    getArea,
    getAreaByID,
    getAreaByDistrictID,
    getAreaByRegionID,
    getAreaByZoneID
}