const express=require("express");
const app=express();
const route=require('./routes/routes.js');
const session = require('express-session')

require('dotenv').config();
const PORT=process.env.PORT;
app.use(express.json());
app.use(
    session({
        secret: 'secret',
        resave:false,
        saveUninitialized:true
    })
);

route.routes(app);
app.listen(PORT,()=>{
    console.log("System is running");
})