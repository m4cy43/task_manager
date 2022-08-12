// MongoDB connection

const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DB connected. Host: ${dbConnection.connection.host}`);
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = dbConnect;