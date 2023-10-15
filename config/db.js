// config/db.js
const mongoose = require("mongoose");

const db = process.env.MONGO_URI || 'mongodb+srv://chibuikeuzoechina:R3hWAnWBPxRlfGz4@cluster0.xbtul26.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB is connected");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;