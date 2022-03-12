const mysql=require('mysql');
require('dotenv').config();
const createPool= mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
});
module.exports={
    createPool
}