import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name: String,
    age: Number,
    city: String
});

const User = mongoose.model("Students", userSchema);

export default User;