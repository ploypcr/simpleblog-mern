require('dotenv').config()

const express = require("express")
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const connectDB = require('./db');
const userRoute = require('./routes/userRoute');


connectDB();
app.use(express.json());
app.use('/',userRoute);
app.listen(process.env.PORT, () => {
    console.log(`Server running at <http://localhost>:${port}/`);
  });
