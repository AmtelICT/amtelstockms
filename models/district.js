const pool=require("../DB/db");
const district=(data,callback)=>{
    pool.createPool.query('CALL sp_districts(?,?,?,?,?)',
    [
        data.id,
        data.region_id,
        data.name,
        data.description,
        data.user_id,
    ],(error,result)=>{
        return callback(error,result);
    });
};
const getDistrict=(callback)=>{
    pool.createPool.query('CALL rp_districts()',(error,result)=>{
        return callback(error,result);
    });
};
const getDistrictByID=(id,callback)=>{
    pool.createPool.query(`
        SELECT d.id,d.name,d.description,d.status,date(d.date) 'date',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' FROM districts d
        INNER JOIN regions r ON r.id=d.region_id
        INNER JOIN zone z ON z.id=r.zone_id WHERE d.id=?`,[id],(error,result)=>{
        return callback(error,result);
    });
};
const getDistrictByRegionID=(id,callback)=>{
    pool.createPool.query(`
    SELECT d.id,d.name,d.description,d.status,date(d.date) 'date',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' FROM districts d
    INNER JOIN regions r ON r.id=d.region_id
    INNER JOIN zone z ON z.id=r.zone_id WHERE r.id=? ORDER BY d.name`,[id],(error,result)=>{
        return callback(error,result);
    });
};
const getDistrictByZoneID=(id,callback)=>{
    pool.createPool.query(`
    SELECT d.id,d.name,d.description,d.status,date(d.date) 'date',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' FROM districts d
    INNER JOIN regions r ON r.id=d.region_id
    INNER JOIN zone z ON z.id=r.zone_id WHERE z.id=?`,[id],(error,result)=>{
        return callback(error,result);
    });
};
module.exports={
    district,
    getDistrict,
    getDistrictByID,
    getDistrictByRegionID,
    getDistrictByZoneID
};