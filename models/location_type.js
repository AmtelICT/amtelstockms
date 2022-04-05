const pool=require("../DB/db");
const locationType=(data,callback)=>{
    pool.createPool.query('CALL sp_location_type(?,?,?)',
    [
        data.id,
        data.name,
        data.user_id,
    ],(error,result)=>{
        return callback(error,result);
    }
    )
};
const getlocationType=(callback)=>{
    pool.createPool.query('CALL rp_locationTypes()',(error,result)=>{
        return callback(error,result);
    });
};
const getlocationTypeByID=(id,callback)=>{
    pool.createPool.query('SELECT * FROM locationType WHERE id=?',[id],(error,result)=>{
        return callback(error,result);
    });
};
module.exports={
    locationType,
    getlocationType,
    getlocationTypeByID
};