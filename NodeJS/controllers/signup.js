const Users = require("../models/user");
const bcryptjs = require("bcryptjs")
module.exports.signup = (req,res,next)=>{
    res.json({message:"Signup"})
}
module.exports.signup_account = (req,res,next)=>{
    if(!req.body.fullname||!req.body.email||!req.body.password||!req.body.password2){
        res.json({success:false,message:"Fill the Missing Credentials!"})
    }
    if(req.body.password.length<6){
        res.json({success:false,message:"Password Is Shorter Than 6 Characters"})
    }
    if(req.body.password!=req.body.password2){
        res.json({success:false,message:'Passwords Does Not Match!'})
    }
    else{
        Users.findOne({email:req.body.email}).then(users=>{
            if(users){
                res.json({success:false,message:"Email Is Already Registered!"})
            }
            else{
                const newUsers  = new Users({
                    fullname:req.body.fullname,
                    email:req.body.email,
                    password:req.body.password,
                    created_date:new Date()
                })
                const salt = 10;
                bcryptjs.genSalt(salt,(err,salt)=>{
                    if(err) throw err
                    bcryptjs.hash(newUsers.password,salt,(err,hash)=>{
                        if(err) throw err;
                        newUsers.password = hash;
                        newUsers.save().then(users=>{
                            res.json({success:true,message:"You've Successfully Registered!"})
                        }).catch((err)=>{
                            console.log(err)
                        })
                    })
                })
            }
        })
    }
}