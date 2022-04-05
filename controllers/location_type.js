const locationTypeModel=require("../models/location_type")
const locationType=(req,res)=>{
    const body=req.body;
    locationTypeModel.locationType(body,(err,result)=>{
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
const getlocationType=(req,res)=>{
    locationTypeModel.getlocationType((err,result)=>{
        console.log(result);
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
const getlocationTypeByID=(req,res)=>{
    id=req.params.id;
    locationTypeModel.getlocationTypeByID(id,(err,result)=>{
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
module.exports={
    locationType,
    getlocationType,
    getlocationTypeByID
}