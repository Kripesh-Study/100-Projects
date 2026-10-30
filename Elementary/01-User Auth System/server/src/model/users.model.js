import mongoose, { model, Schema }  from "mongoose";

const userSchema = Schema({
    name:{
        type:String,
        requred:true
    },
    email:{
        type:String,
        requred:true
    },
    password:{
        type:String,
        requred:true
    }
})


const UserModel = new model("user",userSchema);

export default UserModel;