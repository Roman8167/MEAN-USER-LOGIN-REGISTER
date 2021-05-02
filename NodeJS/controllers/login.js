const Users = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config({path:'../process.env'})
module.exports.login = (req,res,next)=>{
    res.json({message:"Login...."})
}
module.exports.login_account = (req,res,next)=>{
    
    if(!req.body.email||!req.body.password){
        res.json({success:false,message:"Please Fill The Missing Credentials!"})
    }

    Users.findOne({email:req.body.email}).then(users=>{
        if(!users){
            res.json({success:false,message:"This Email Isn't Registered!"})
        }
        
        bcryptjs.compare(req.body.password,users.password,(err,isMatch)=>{
            if(isMatch){
                const payload = {
                    fullname:users.fullname,
                    email:users.email,
                    dateJoined:new Date(users.created_date)
                }
                jwt.sign({token:payload},process.env.SECRETKEY,(err,token)=>{
                    if(err) throw err;
                    res.cookie(process.env.COOKIE,token,{maxAge:24*60*60*1000,httpOnly:true})
                    res.json({success:true,token:token,user:payload,message:"Successfully Logged In..."})
                })
               
            }   
            else{
                res.json({success:false,message:"Incorrect Password!"})
            }
        })
    })
}
module.exports.logout = (req,res,next)=>{
    const cookieName = process.env.COOKIE;
    res.clearCookie(cookieName)
    res.json({success:true,message:"Logout Successful..."})



}
