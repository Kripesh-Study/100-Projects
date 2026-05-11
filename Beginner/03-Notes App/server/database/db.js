import mongoose, { mongo } from 'mongoose';

async function checkConnection(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connection established with mongoose successfully");
    }catch(err){
        console.log("mongoose connection failed! ");
    }
}

export default checkConnection;