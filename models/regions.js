const pool=require("../DB/db");
const region=(data,callback)=>{
    pool.createPool.query('CALL sp_regions(?,?,?,?,?)',
    [
        data.id,
        data.zone_id,
        data.name,
        data.description,
        data.user_id,
    ],(error,result)=>{
        return callback(error,result);
    }
    )
};
const getRegions=(callback)=>{
    pool.createPool.query('CALL rp_regions("%")',(error,result)=>{
        return callback(error,result);
    });
};
const getRegionsByID=(id,callback)=>{
    pool.createPool.query('CALL rp_regions(?)',[id],(error,result)=>{
        return callback(error,result);
    });
};
module.exports={
    region,
    getRegions,
    getRegionsByID,
};