const mongoose = require('mongoose');
const config = require('config');


const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGO_URL);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;