const mongoose = require('mongoose');


function connectDB(){mongoose.connect("mongodb://localhost:27017/backup01").then(()=>{
    
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));
}


module.exports=connectDB;

