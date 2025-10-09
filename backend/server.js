const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const cookie = require('cookie-parser');
const app = express();
const port = process.env.PORT || 8080;
const errorHandler = require('./middlewares/errorHandler');
const chatbotRoutes = require('./routes/chatbotRoutes');

const connectDb = require('./config/dbConfig');
const masterRoutes = require('./routes/masterRoutes');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');
const allUsersRoutes = require('./routes/AllUsers/addUsers');

connectDb();
app.use(express.json());
app.use(cookie());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use('/api/v1/master', masterRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/company', companyRoutes);
app.use('/api/v1/chatbot', chatbotRoutes);
app.use('/api/v1/allUsers', allUsersRoutes);
app.use(errorHandler);
app.listen(port, '0.0.0.0', () => {
  console.log(`server is running on port : ${port}`);
});
