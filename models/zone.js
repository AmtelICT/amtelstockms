const pool=require("../DB/db");
const zone=(data,callback)=>{
    pool.createPool.query('CALL sp_zone(?,?,?,?)',
    [
        data.id,
        data.name,
        data.description,
        data.user_id,
    ],(error,result)=>{
        return callback(error,result);
    }
    )
};
const getZone=(callback)=>{
    pool.createPool.query('CALL rp_zones()',(error,result)=>{
        return callback(error,result);
    });
}
module.exports={
    zone,
    getZone
};