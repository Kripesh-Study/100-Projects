import mongoose, { connect } from "mongoose"

const checkConnection  =  async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection Established to the Mongodb")
    } catch (error) {
        console.log("Connection Error", error);
    }
}


export default checkConnection