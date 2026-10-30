import mongoose from "mongoose"

const checkConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected successfully with db")
    } catch (error) {
        console.log("cann't connected with db:=> ",error);
    }
}


export default checkConnection;