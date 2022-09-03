const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact:{
    type: String,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  }

  
});




module.exports = userSchema;
