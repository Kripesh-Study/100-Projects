import mongoose, { model, Schema } from "mongoose";

const historySchema = Schema({
    session_id : String,
    score : Number,
    height:Number,
    weight:Number
},{timestamps:true}) 



const HistoryModel = new model("History",historySchema)

export default HistoryModel;