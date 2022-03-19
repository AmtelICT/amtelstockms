const pool=require("../DB/db");
const hq=(data,callback)=>{
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
const getHq=(callback)=>{
    pool.createPool.query("CALL rp_hq",(error,result)=>{
        return callback(error,result)
    });
};
const getHqByID=(id,callback)=>{
    pool.createPool.query(`
        SELECT h.id,h.name,h.description,h.latitude,h.longitude,h.status,date(h.date) 'date',a.name "area_name",d.name "district_name",r.region_name,z.name "zone_name" FROM hq_offices h 
        INNER JOIN area a ON a.id=h.area_id
        INNER JOIN districts d ON d.id=a.district_id
        INNER JOIN regions r ON r.id= d.region_id
        INNER JOIN zone z on z.id=r.zone_id WHERE h.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};
const getHqByAreaID=(id,callback)=>{
    pool.createPool.query(`
        SELECT h.id,h.name,h.description,h.latitude,h.longitude,h.status,date(h.date) 'date',a.name "area_name",d.name "district_name",r.region_name,z.name "zone_name" FROM hq_offices h 
        INNER JOIN area a ON a.id=h.area_id
        INNER JOIN districts d ON d.id=a.district_id
        INNER JOIN regions r ON r.id= d.region_id
        INNER JOIN zone z on z.id=r.zone_id WHERE a.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};
const getHqByDistrictID=(id,callback)=>{
    pool.createPool.query(`
        SELECT h.id,h.name,h.description,h.latitude,h.longitude,h.status,date(h.date) 'date',a.name "area_name",d.name "district_name",r.region_name,z.name "zone_name" FROM hq_offices h 
        INNER JOIN area a ON a.id=h.area_id
        INNER JOIN districts d ON d.id=a.district_id
        INNER JOIN regions r ON r.id= d.region_id
        INNER JOIN zone z on z.id=r.zone_id WHERE d.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};
const getHqByRegionID=(id,callback)=>{
    pool.createPool.query(`
        SELECT h.id,h.name,h.description,h.latitude,h.longitude,h.status,date(h.date) 'date',a.name "area_name",d.name "district_name",r.region_name,z.name "zone_name" FROM hq_offices h 
        INNER JOIN area a ON a.id=h.area_id
        INNER JOIN districts d ON d.id=a.district_id
        INNER JOIN regions r ON r.id= d.region_id
        INNER JOIN zone z on z.id=r.zone_id WHERE r.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};
const getHqByZoneID=(id,callback)=>{
    pool.createPool.query(`
        SELECT h.id,h.name,h.description,h.latitude,h.longitude,h.status,date(h.date) 'date',a.name "area_name",d.name "district_name",r.region_name,z.name "zone_name" FROM hq_offices h 
        INNER JOIN area a ON a.id=h.area_id
        INNER JOIN districts d ON d.id=a.district_id
        INNER JOIN regions r ON r.id= d.region_id
        INNER JOIN zone z on z.id=r.zone_id WHERE z.id=?`,[id],(error,result)=>{
        return callback(error,result)
    });
};

module.exports={
    hq,
    getHq,
    getHqByID,
    getHqByAreaID,
    getHqByDistrictID,
    getHqByRegionID,
    getHqByZoneID
}