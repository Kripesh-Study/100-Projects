import mongoose from "mongoose";


const checkConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URI)
        console.log("successfully connected to database")
    } catch (error) {
        console.log("unsuccessfully  to connect with database",error)
    }
}

export default checkConnection;