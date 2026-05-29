import mongoose from "mongoose"



const checkConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected Successfully")
    } catch (error) {
        console.log("cannot connect to the database");
    }
}


export default checkConnection;