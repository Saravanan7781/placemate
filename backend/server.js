const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookie = require('cookie-parser')
const app = express();
const port = process.env.PORT || 8080;
const errorHandler = require('./middlewares/errorHandler');
const connectDb = require('./config/dbConfig');
const masterRoutes = require('./routes/masterRoutes');
const userRoutes = require('./routes/userRoutes')
connectDb();
app.use(express.json());
app.use(cookie());
app.use(cors(
    {
        origin:'http://localhost:5173',
        credentials:true
    }
));
app.use('/api/v1/master',masterRoutes);
app.use('/api/v1/user',userRoutes)
app.use(errorHandler);
app.listen(port,'0.0.0.0',()=>{
    console.log(`server is running on port : ${port}`)
})