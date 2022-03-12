const zoneModel=require("../models/zone")
const zone=(req,res)=>{
    const body=req.body;
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
    console.log("read");
    zoneModel.getZone((err,result)=>{
        //res.json('almost done');
        console.log(result);
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
    zone,
    getZone
}