import mongoose, { mongo } from "mongoose"


const counterSchema = new mongoose.Schema({
    number:{
        type:Number,
        default:0
    }
})



const CounterModel = new mongoose.model("Counter",counterSchema)

export default CounterModel