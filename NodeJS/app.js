const express = require("express");
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const cookieParser = require("cookie-parser")
app.use(cookieParser())
///////router
const router = require("./routes/signup");
const router2 = require("./routes/login");
const router3 = require("./routes/dashboard")

///import dotenv
require("dotenv").config({path:'./process.env'})

///connect to mongodb
mongoose.connect(process.env.URL,()=>{
    console.log("Connected To Mongoose...")
})
///middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'false'}))
app.use(cors({origin:'http://localhost:4200',credentials: true}))
//CORS Middleware
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next()
  
});



app.use("/",router)
app.use("/",router2)
app.use("/",router3)


app.listen(process.env.PORT,()=>{
    console.log(`Server Started Running At Port ${process.env.PORT}`)
})