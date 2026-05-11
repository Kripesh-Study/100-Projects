import { Schema, model} from "mongoose";

const notesSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})


const NotesModel = model("Notes",notesSchema);



export default NotesModel;