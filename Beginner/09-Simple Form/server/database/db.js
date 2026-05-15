import mongoose from "mongoose";

export default async function checkConnection(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection successful")
    }catch(e){
        console.log("Connection unsuccessful due to : ", e)
    }

}