import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/studentDB");
        console.log("MongooDB connected successfully");
    }catch (error) {
        console.error("MongooDB connection failed:", error);
    }
};

export default connectDB;