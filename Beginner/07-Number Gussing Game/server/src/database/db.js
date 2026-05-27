import mongoose from "mongoose"

const checkConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("successfully connected to db")
    } catch (error) {
        console.log(error)
    }
}
export default checkConnection;