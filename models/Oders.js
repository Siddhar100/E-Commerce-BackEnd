const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserSchema = new Schema({

    userId:{
        type:String,
        
    },
    itemCode:{
        type:String,
        
    },
    itemPrice:{
       type:String,
       
    },
    orderDate:{
        type:Date,
        default:Date.now
    },

});

module.exports = mongoose.model("oders",UserSchema);