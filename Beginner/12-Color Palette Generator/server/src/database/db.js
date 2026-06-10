import mongoose, { Mongoose }  from "mongoose";

const checkConnection = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connection successful")
    } catch (error) {
        console.log(error)
    }
}

export default checkConnection;