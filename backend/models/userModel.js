const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        user_name:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        phone_number:{type:String,required:true},
        address:{type:String,required:true}
    }
);
module.exports = userSchema;