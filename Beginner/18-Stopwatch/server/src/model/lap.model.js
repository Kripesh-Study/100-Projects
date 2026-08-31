import mongoose, { model, Schema } from "mongoose";


const lapSchema =  Schema({
    duration:Object,
    time:Object
})


const LapModel = new model("lap",lapSchema)

export default LapModel;