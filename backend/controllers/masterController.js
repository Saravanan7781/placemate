const mongoose = require('mongoose')
const superAdminData = require('../models/masterDatabase/superAdminModel');
const createDb = async (req,res)=>{
     const {college_name} = req.body;
     if(!college_name){
        return res.status(400);
     }
     const db_name = college_name.split(' ').join('_');
     const dburi = process.env.GENEREL_DATABASE + db_name
     console.log(dburi)
     const dbCreation = await mongoose.createConnection(dburi);
     const UserSchema = new mongoose.Schema({ name: String });
     const UserModel = dbCreation.model('User', UserSchema);
     await UserModel.create({name:"sameer"})
   await superAdminData.create({
    email:'mohammedsameer.cs22@bitsathy.ac.in',
    user_name:'sameer',
    password:'10',
    college_name:'Bannari amman institute of technology',
    domain_name:"@bitsathy.ac.in",
    address:"sathy-638401,tamilnadu",
     phone_number:"8667645554",
     db_initialized:true
   })
   console.log(`database created succesfully at runtime`)
   return res.status(200).json({msg:`Succesfully created database for ${college_name}`})
}
module.exports = {createDb};