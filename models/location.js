const pool=require("../DB/db");
const location=(data,callback)=>{
    pool.createPool.query("CALL sp_locations(?,?,?,?,?,?,?,?)",
    [
        data.id,
        data.location_type,
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
const getlocation=(callback)=>{
    pool.createPool.query("CALL rp_locations",(error,result)=>{
        return callback(error,result)
    });
};
const getlocationByID=(id,callback)=>{
    pool.createPool.query(`
        SELECT l.id,l.location_typel.area_id,l.name,l.description,l.latitude,l.longitude,l.status,l.date,a.name 'area_name',d.id 'district_id',d.name 'district_name',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' 
        FROM locations l
        INNER JOIN area a ON l.area_id=a.id
        INNER JOIN districts d ON a.district_id=d.id
        INNER JOIN regions r ON d.region_id=r.id
        INNER JOIN zone z ON r.zone_id=z.id WHERE b.id=?`,
        [id],(error,result)=>{
        return callback(error,result)
    });
};
const getlocationByAreaID=(id,callback)=>{
    pool.createPool.query(`
        SELECT l.id,l.location_typel.area_id,l.name,l.description,l.latitude,l.longitude,l.status,l.date,a.name 'area_name',d.id 'district_id',d.name 'district_name',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' 
        FROM locations l
        INNER JOIN area a ON l.area_id=a.id
        INNER JOIN districts d ON a.district_id=d.id
        INNER JOIN regions r ON d.region_id=r.id
        INNER JOIN zone z ON r.zone_id=z.id WHERE WHERE a.id=?`,
        [id],(error,result)=>{
        return callback(error,result)
    });
};
const getlocationByDistrictID=(id,callback)=>{
    pool.createPool.query(`
        SELECT l.id,l.location_typel.area_id,l.name,l.description,l.latitude,l.longitude,l.status,l.date,a.name 'area_name',d.id 'district_id',d.name 'district_name',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' 
        FROM locations l
        INNER JOIN area a ON l.area_id=a.id
        INNER JOIN districts d ON a.district_id=d.id
        INNER JOIN regions r ON d.region_id=r.id
        INNER JOIN zone z ON r.zone_id=z.id WHERE`,
    [id],(error,result)=>{
        return callback(error,result)
    });
};
const getlocationByRegionID=(id,callback)=>{
    pool.createPool.query(`
        SELECT l.id,l.location_typel.area_id,l.name,l.description,l.latitude,l.longitude,l.status,l.date,a.name 'area_name',d.id 'district_id',d.name 'district_name',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' 
        FROM locations l
        INNER JOIN area a ON l.area_id=a.id
        INNER JOIN districts d ON a.district_id=d.id
        INNER JOIN regions r ON d.region_id=r.id
        INNER JOIN zone z ON r.zone_id=z.id WHERE`,
    [id],(error,result)=>{
        return callback(error,result)
    });
};
const getlocationByZoneID=(id,callback)=>{
    pool.createPool.query(`
        SELECT l.id,l.location_typel.area_id,l.name,l.description,l.latitude,l.longitude,l.status,l.date,a.name 'area_name',d.id 'district_id',d.name 'district_name',r.id 'region_id',r.region_name,z.id 'zone_id',z.name 'zone_name' 
        FROM locations l
        INNER JOIN area a ON l.area_id=a.id
        INNER JOIN districts d ON a.district_id=d.id
        INNER JOIN regions r ON d.region_id=r.id
        INNER JOIN zone z ON r.zone_id=z.id WHERE`,
    [id],(error,result)=>{
        return callback(error,result)
    });
};

module.exports={
    location,
    getlocation,
    getlocationByID,
    getlocationByAreaID,
    getlocationByDistrictID,
    getlocationByRegionID,
    getlocationByZoneID
}