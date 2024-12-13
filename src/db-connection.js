import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
    let uri;
    try {
        // Use environment variables for username and password
        uri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URI}?authSource=admin`;
        await mongoose.connect(uri, {
        });
        console.log('Connected to the employees database');
    } catch (err) {
        console.error('Database connection error:', err);
        console.log('MongoDB URI:', uri);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;