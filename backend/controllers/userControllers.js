const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const super_admin_data = require('../models/masterDatabase/superAdminModel')
const userData = require('../models/userModel')


const login = asyncHandler( async (req,res)=>{
     const {email,password,login_type} =req.body;
     console.log(email)
     const domain_name = '@' + email.split('@')[1];
     console.log(domain_name)
     const super_admin = await super_admin_data.findOne({domain_name});
     if(!super_admin){
        res.status(404);
        throw new Error("email not found in Master");
     }
     if(email===super_admin.email){
        //super admin
        if(login_type==='oauth' || password===super_admin.password){
            const token = jwt.sign(
                {email,user_name:super_admin.user_name,phone_number:super_admin.phone_number,address:super_admin.address},
                process.env.SECRETKEY,
                {expiresIn:"1hr"}
            )
            res.cookie('token',token,{
                httpOnly:true,
                secure:false,//false for localhost dev.
                sameSite:'strict',
                maxAge: 3600000
               });
           return res.status(200).json({
            user_name:super_admin.user_name,
            email,
            phone_number:super_admin.phone_number,
            address:super_admin.address
           })    
        }
         res.status(400);
         throw new Error("Invalid password");    
     }
     else{
        //normal user
        console.log(super_admin)
        const college_name = super_admin.college_name;
        console.log(college_name)
        const db_name = college_name.split(' ').join('_');
        console.log(db_name)
        const db_uri = process.env.GENEREL_DATABASE + db_name;
       
        //connecting to the respective database
        const connection=await mongoose.createConnection(db_uri);

        //establishing a connection between the database model 
        //we are not getting all the data's present in that particular schema
        const user_model = connection.model('User',userData);
        const user_data  = await user_model.findOne({email});
        if(!user_data){
            res.status(404);
            throw new Error("email not found");
         }
        
        if(login_type==='oauth' || password===user_data.password){
            console.log(process.env.SECRETKEY)
            const token = jwt.sign(
                {email,user_name:user_data.user_name,phone_number:user_data.phone_number,address:user_data.address},
                process.env.SECRETKEY,
                {expiresIn:"1hr"}
            )
           res.cookie('token',token,{
            httpOnly:true,
            secure:false,//false for localhost dev.
            sameSite:'strict',
            maxAge: 3600000
           });
           console.log(user_data)
           return res.status(200).json({
            user_name:user_data.user_name,
            email,
            phone_number:user_data.phone_number,
            address:user_data.address
           })    
        }
         res.status(400);
         throw new Error("Invalid password");
        }
     }
)

const register = asyncHandler( async (req,res)=>{
    console.log("hi i am in register page")
    const college_name = "Bannari amman institute of technology";
    const db_name = college_name.split(" ").join('_');
    const db_uri = process.env.GENEREL_DATABASE + db_name;
    const connection=await mongoose.createConnection(db_uri);
    const user_model = connection.model('User',userData);
    console.log("succesfully created a connection")
    await user_model.create(
        {
            user_name:"saravanan",
            email:"saravanan.cb22@bitsathy.ac.in",
            password:"10",
            phone_number:"1234432112",
            address:"dharapuram,tirupur"
        }
    );
   return  res.status(200).json({msg:"new data's inserted"})
});


module.exports={login,register};