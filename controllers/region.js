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
    let id=req.params.id;
    if(id == ''){
        id='%';
    }
    console.log(id);
    regionModel.getRegions(id,(err,result)=>{
        //res.json('almost done');
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
    getRegions
}