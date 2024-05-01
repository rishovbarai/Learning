const mongoose = require("mongoose");
const uri = process.env.MONGODB_URL;

const connectionDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB with Mongoose")
    }
    catch(error){
        console.error("Error connecting to MongoDB:", error)
        process.exit(1);
    }
}

module.exports = { connectionDB };


