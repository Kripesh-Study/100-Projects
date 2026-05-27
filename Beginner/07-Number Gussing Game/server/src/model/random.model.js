import mongoose, { model, Schema } from "mongoose";


const numSchema = new Schema({
    number:Number
})

const scoreSchema = new Schema({
    bestScore:Number
})

const RandNumberModel =  new model("RandNumber",numSchema);
const BestScoreModel =  new model("BestScore",scoreSchema);

export {RandNumberModel,BestScoreModel}