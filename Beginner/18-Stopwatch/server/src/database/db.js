import mongoose from "mongoose"

const checkConnection =()=>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/BeginnerProject")
        console.log("connected to db successfully");
    }catch(e){
        console.log("cannot connected to db");
    }
}

export default checkConnection;