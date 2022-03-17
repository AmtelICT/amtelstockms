const regionModel=require("../models/regions")
const region=(req,res)=>{
    const body=req.body;
    regionModel.region(body,(err,result)=>{
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
const getRegions=(req,res)=>{
    regionModel.getRegions((err,result)=>{
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
const getRegionsByID=(req,res)=>{
    let id=req.params.id;
    console.log(id);
    regionModel.getRegionsByID(id,(err,result)=>{
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
    getRegionsByID
}