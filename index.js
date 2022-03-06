const express=require("express");
const app=express();
require('dotenv').config();
const PORT=process.env.PORT;
app.get('/',(req,res)=>{
    res.send("Welcome");
})
app.listen(PORT,()=>{
    console.log("System is running");
})