const mongoose = require('mongoose');
const mongoURI = process.env.URL;

const connectToMongo = async ()=>{
    try {
     //   mongoose.set('strictQuery', false)
    //   const url = process.env.MONGODB_URI;
       const url = mongoURI;
        mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Mongo is connected')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
}
module.exports = connectToMongo;