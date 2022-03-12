const express=require("express");
const app=express();
const route=require('./routes/routes.js');
require('dotenv').config();
const PORT=process.env.PORT;
app.use(express.json());
route.routes(app);
app.listen(PORT,()=>{
    console.log("System is running");
})