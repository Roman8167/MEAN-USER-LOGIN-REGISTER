const jwt = require("jsonwebtoken");

require("dotenv").config({path:'./process.env'})
module.exports.verifyToken = (req,res,next)=>{
    let bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader!=="undefined"||bearerHeader!=null){
        let bearerToken = bearerHeader.split(' ')[1]
        let decoded = jwt.verify(bearerToken,process.env.SECRETKEY);
        req.token =  decoded
        res.json({message:"Succesful"})
        next()
    }
    else{
        res.sendStatus(401).json({message:'Auth Failed!'})
    }
}

