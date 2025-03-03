const mongoose = require('mongoose');
const config = require('../config/config');


const connectDB = ()=>{
    mongoose.connect(config.MONGO_URL)
    .then(()=>{
        console.log("Connected to db")
    })
    .catch(err=>{
        console.log(err)
    })
}

module.exports = connectDB;