const districtModel=require("../models/district");
const district=(req,res)=>{
    const body=req.body;
    districtModel.district(body,(err,result)=>{
        if(err) {
            res.json(err);
        }
        else{
            res.json({
                message:result
            })
        }
    })
};
const getDistrict=(req,res)=>{
    districtModel.getDistrict((err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json({
                message:result
            })
        }
    })
};
const getDistrictByID=(req,res)=>{
    let id=req.params.id;
    districtModel.getDistrictByID(id,(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({
                message:result
            })
        }
    })
}
const getDistrictByRegionID=(req,res)=>{
    let id=req.params.id;
    districtModel.getDistrictByRegionID(id,(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({
                message:result
            })
        }
    })
}
const getDistrictByZoneID=(req,res)=>{
    let id=req.params.id;
    districtModel.getDistrictByZoneID(id,(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({
                message:result
            })
        }
    })
}
module.exports ={
    district,
    getDistrict,
    getDistrictByID,
    getDistrictByRegionID,
    getDistrictByZoneID
}