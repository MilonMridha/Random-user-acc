const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userHandler = require('./routeHandler/userHandler');

const port = process.env.PORT || 5000;
// express middleware------>
const app = express();
require("dotenv").config();


const corsConfig = {
  origin: true,
  Credentials: true,
}
app.use(cors(corsConfig))
app.options('*', cors(corsConfig));
app.use(express.json());

//Database connected with mongoose-------------->

mongoose
.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t7ino.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
).then(() => console.log("Connected Successfully"))
.catch((err) => console.log(err));



app.get('/', (req, res) => {
  res.status(200).send('Random User Server is Running');
})

// application routes-------->
app.use('/user', userHandler);







// database connection with mongoose-------->
const  errorHandler = (err, req, res, next) => {
    if (res.headerSent) {
      return next(err);
    }
    res.status(500).json({ error: err });
  }
  app.use(errorHandler);


  
  app.listen(port, () => {
    console.log(`Random User App listening on port ${port}`);
  });
