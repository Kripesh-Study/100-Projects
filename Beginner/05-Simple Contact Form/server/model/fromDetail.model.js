import mongoose, { model, Schema } from "mongoose";

const contactFormSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
}) 


export const FormModel = new model("ContactFormDetail",contactFormSchema);