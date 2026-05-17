import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("successfully connect with db")
    } catch (error) {
        console.log("cannot connect to db")
    }
}

export default connectDB