const pool=require("../DB/db");
const area=(data,callback)=>{
    pool.createPool.query("CALL sp_area(?,?,?,?,?)",
    [
        data.id,
        data.district_id,
        data.name,
        data.description,
        data.user_id
    ],(error,result)=>{
        return callback(error,result);
    });
};
const getArea=(callback)=>{
    pool.createPool.query("CALL rp_area",(error,result)=>{
        return callback(error,result)
    });
};
const getAreaByID=(id,callback)=>{
    pool.createPool.query(`SELECT a.id,a.district_id,a.name,a.description,a.status,date(a.date),d.name "district",r.region_name,z.name 'zone_name' FROM area a 
        INNER JOIN districts d ON d.id=a.district_id
        INNER JOIN regions r ON r.id=d.region_id
        INNER JOIN zone z ON z.id=r.zone_id WHERE a.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};
const getAreaByDistrictID=(id,callback)=>{
    pool.createPool.query(`SELECT a.id,a.district_id,a.name,a.description,a.status,date(a.date),d.name "district",r.region_name,z.name 'zone_name' FROM area a 
        INNER JOIN districts d ON d.id=a.district_id
        INNER JOIN regions r ON r.id=d.region_id
        INNER JOIN zone z ON z.id=r.zone_id WHERE a.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};
const getAreaByRegionID=(id,callback)=>{
    pool.createPool.query(`SELECT a.id,a.district_id,a.name,a.description,a.status,date(a.date),d.name "district",r.region_name,z.name 'zone_name' FROM area a 
        INNER JOIN districts d ON d.id=a.district_id
        INNER JOIN regions r ON r.id=d.region_id
        INNER JOIN zone z ON z.id=r.zone_id WHERE a.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};
const getAreaByZoneID=(id,callback)=>{
    pool.createPool.query(`SELECT a.id,a.district_id,a.name,a.description,a.status,date(a.date),d.name "district",r.region_name,z.name 'zone_name' FROM area a 
        INNER JOIN districts d ON d.id=a.district_id
        INNER JOIN regions r ON r.id=d.region_id
        INNER JOIN zone z ON z.id=r.zone_id WHERE a.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};

module.exports={
    area,
    getArea,
    getAreaByID
}