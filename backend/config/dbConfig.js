const mongoose = require('mongoose');
const connectDb = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MASTER_DATABASE);
        console.log(`mongo db connected succesfully ${connect.connection.name}`);
    } catch (error) {
        console.log(`error while connecting to db error : ${error}`)
        process.exit(1);
    }
}
module.exports = connectDb;