const regionModel=require("../models/regions")
const region=(req,res)=>{
    const body=req.body;
    regionModel.region(body,(err,result)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json({
                message:result[0][0].msg
            });
        }
    })
};
const getRegions=(req,res)=>{
    regionModel.getRegions((err,result)=>{
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
const getRegionsByID=(req,res)=>{
    let id=req.params.id;
    regionModel.getRegionsByID(id,(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({
                message:result[0]
            })
        }
    })
}
const getRegionsByZone=(req,res)=>{
    let id=req.params.id;
    regionModel.getRegionsByZone(id,(err,result)=>{
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
module.exports={
    region,
    getRegions,
    getRegionsByID,
    getRegionsByZone
}