const pool=require("../DB/db");
const branch=(data,callback)=>{
    pool.createPool.query("CALL sp_branches(?,?,?,?,?,?,?)",
    [
        data.id,
        data.area_id,
        data.name,
        data.description,
        data.latitude,
        data.longitude,
        data.user_id
    ],(error,result)=>{
        return callback(error,result);
    });
};
const getbranch=(callback)=>{
    pool.createPool.query("CALL rp_branches",(error,result)=>{
        return callback(error,result)
    });
};
const getbranchByID=(id,callback)=>{
    pool.createPool.query(`SELECT b.id,b.area_id,b.name,b.description,b.latitude,b.longitude,b.status,b.date,a.name 'area_name',d.id 'district_id',d.name 'district_name',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' FROM branches b
    INNER JOIN area a ON b.area_id=a.id
    INNER JOIN districts d ON a.district_id=d.id
    INNER JOIN regions r ON d.region_id=r.id
    INNER JOIN zone z ON r.zone_id=z.id WHERE b.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};
const getbranchByAreaID=(id,callback)=>{
    pool.createPool.query(`SELECT b.id,b.area_id,b.name,b.description,b.latitude,b.longitude,b.status,b.date,a.name 'area_name',d.id 'district_id',d.name 'district_name',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' FROM branches b
    INNER JOIN area a ON b.area_id=a.id
    INNER JOIN districts d ON a.district_id=d.id
    INNER JOIN regions r ON d.region_id=r.id
    INNER JOIN zone z ON r.zone_id=z.id WHERE a.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};
const getbranchByDistrictID=(id,callback)=>{
    pool.createPool.query(`SELECT b.id,b.area_id,b.name,b.description,b.latitude,b.longitude,b.status,b.date,a.name 'area_name',d.id 'district_id',d.name 'district_name',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' FROM branches b
    INNER JOIN area a ON b.area_id=a.id
    INNER JOIN districts d ON a.district_id=d.id
    INNER JOIN regions r ON d.region_id=r.id
    INNER JOIN zone z ON r.zone_id=z.id WHERE d.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};
const getbranchByRegionID=(id,callback)=>{
    pool.createPool.query(`SELECT b.id,b.area_id,b.name,b.description,b.latitude,b.longitude,b.status,b.date,a.name 'area_name',d.id 'district_id',d.name 'district_name',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' FROM branches b
    INNER JOIN area a ON b.area_id=a.id
    INNER JOIN districts d ON a.district_id=d.id
    INNER JOIN regions r ON d.region_id=r.id
    INNER JOIN zone z ON r.zone_id=z.id r.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};
const getbranchByZoneID=(id,callback)=>{
    pool.createPool.query(`SELECT b.id,b.area_id,b.name,b.description,b.latitude,b.longitude,b.status,b.date,a.name 'area_name',d.id 'district_id',d.name 'district_name',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' FROM branches b
    INNER JOIN area a ON b.area_id=a.id
    INNER JOIN districts d ON a.district_id=d.id
    INNER JOIN regions r ON d.region_id=r.id
    INNER JOIN zone z ON r.zone_id=z.id WHERE z.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};

module.exports={
    branch,
    getbranch,
    getbranchByID,
    getbranchByAreaID,
    getbranchByDistrictID,
    getbranchByRegionID,
    getbranchByZoneID
}