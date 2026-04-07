import mongoose from "mongoose";

const connectDB = async () =>{
    try {
       const connectDB = await mongoose.connect("mongodb://localhost:27017/Projects");
    //    console.log(connectDB)
    } catch (error) {
        throw new Error("Mongoose didn't connected " + error)
    }
}

export default connectDB;