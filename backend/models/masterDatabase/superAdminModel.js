const mongoose = require('mongoose');
const superAdminSchema = mongoose.Schema(
    {
         email:{type:String,required:true},
         user_name:{type:String,required:true},
         password:{type:String,required:true},
         college_name:{type:String,required:true},
         domain_name:{type:String,required:true},
         address:{type:String,required:true},
         phone_number:{type:String,required:true},
         db_initialized:{type:Boolean,default:false}
    }
);
module.exports=mongoose.model("superAdmin",superAdminSchema);