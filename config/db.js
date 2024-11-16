const mongoose = require('mongoose');

const MONGO_URL = "mongodb://127.0.0.1:27017/UserManagemant";

const dbconnect = async(res,req) =>{
    try {
        
        await mongoose.connect(MONGO_URL);
        console.log('MongoDB Connection sucessfully...');
    } catch (error) {
        console.log('MongoDB Connection Error',error);
    }
}

module.exports = dbconnect;

