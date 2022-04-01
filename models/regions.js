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
    pool.createPool.query('CALL rp_regions()',(error,result)=>{
        return callback(error,result);
    });
};
const getRegionsByID=(id,callback)=>{
    pool.createPool.query(`SELECT r.id,z.id 'zone_id',z.name 'zone',r.region_name,r.description,r.status,date(r.date) 'date' FROM regions r 
    INNER JOIN zone z ON z.id=r.zone_id WHERE r.id=?`,[id],(error,result)=>{
        return callback(error,result);
    });
};
const getRegionsByZone=(id,callback)=>{
    pool.createPool.query(`SELECT r.id,z.id 'zone_id',z.name 'zone',r.region_name,r.description,r.status,date(r.date) 'date' FROM regions r 
    INNER JOIN zone z ON z.id=r.zone_id WHERE z.id=?`,[id],(error,result)=>{
        return callback(error,result);
    });
};
module.exports={
    region,
    getRegions,
    getRegionsByID,
    getRegionsByZone
};