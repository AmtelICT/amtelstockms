const areaModel=require("../models/area");
const hq=(req,res)=>{
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
const getHq=(req,res)=>{
    areaModel.getArea((err,result)=>{
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
const getHqByID=(req,res)=>{
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
const getHqByAreaID=(req,res)=>{
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
const getHqByDistrictID=(req,res)=>{
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
const getHqByRegionID=(req,res)=>{
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
const getHqByZoneID=(req,res)=>{
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
    hq,
    getHq,
    getHqByID,
    getHqByAreaID,
    getHqByDistrictID,
    getHqByRegionID,
    getHqByZoneID
}