const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({
  item: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
    
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("items", UserSchema);
