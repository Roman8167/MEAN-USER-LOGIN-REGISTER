const mongoose = require("mongoose");
const Users = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    created_date:{
        type:Date,
        required:true
    }
})
module.exports = mongoose.model("user",Users)