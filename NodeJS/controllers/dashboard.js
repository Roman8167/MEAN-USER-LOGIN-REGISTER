const jwt = require("jsonwebtoken")
module.exports.dashboard = (req,res,next)=>{
    const token  = req.cookies[process.env.COOKIE];
    if(token){
        jwt.verify(token,process.env.SECRETKEY,(err,decoded)=>{
            if(err){
                res.json({success:false,message:"User Not Authenticated!.."})
            }
            else{
                res.json({success:true,message:"Welcome..."})
                
            }
        })
    }
    else{
        res.json({success:false,message:"User Not Authenticated!.."})
    }
}