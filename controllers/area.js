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
                message:result
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
module.exports={
    area,
    getArea,
    getAreaByID
}