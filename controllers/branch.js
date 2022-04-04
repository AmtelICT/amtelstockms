const branchModel=require("../models/branch");
const branch=(req,res)=>{
    const body=req.body;
    branchModel.branch(body,(err,result)=>{
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
const getbranch=(req,res)=>{
    branchModel.getbranch((err,result)=>{
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
const getbranchByID=(req,res)=>{
    let id=req.params.id;
    branchModel.getbranchByID(id,(err,result)=>{
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
const getbranchByAreaID=(req,res)=>{
    let id=req.params.id;
    branchModel.getbranchByDistrictID(id,(err,result)=>{
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
const getbranchByDistrictID=(req,res)=>{
    let id=req.params.id;
    branchModel.getbranchByDistrictID(id,(err,result)=>{
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
const getbranchByRegionID=(req,res)=>{
    let id=req.params.id;
    branchModel.getbranchByRegionID(id,(err,result)=>{
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
const getbranchByZoneID=(req,res)=>{
    let id=req.params.id;
    branchModel.getbranchByZoneID(id,(err,result)=>{
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
    branch,
    getbranch,
    getbranchByID,
    getbranchByAreaID,
    getbranchByDistrictID,
    getbranchByRegionID,
    getbranchByZoneID
}