import express from "express";
import dotenv from "dotenv";
import NotesModel from "./model/notes.model.js";
import checkConnection from "./database/db.js";
import cors from "cors"

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())


app.get("/", async (req, res) => {
    const notes = await NotesModel.find();
    res.send(notes)
})

app.post("/", async (req, res) => {
    const notes = req.body;
    // in here notes has {title,description} and it is an object so we can write notes 
    const saveNotes = await NotesModel.create(notes);
    if (!saveNotes) {
        console.log("didnot save");
    }
    console.log("successfully saved");
    res.send("successfully saved");
})

app.put("/", async (req, res) => {
    const { id, title, description } = req.body;
    const user = await NotesModel.findById(id)
    if (user) {
        const updated = await NotesModel.findByIdAndUpdate(id, { title, description })
        if (updated) { console.log("updated sucessfully") } else { console.log("didnot'update ") };
    } else {
        console.log("didnot find any notes")
    }
    res.send("updated successfully")
})
app.delete("/",async(req,res)=>{
    const {id} = req.body;
    const isDeleted = await NotesModel.findByIdAndDelete(id)
    if(isDeleted){
        console.log("deleted successfully");
    }else{
        console.log("deleted unsuccessfully");
    }
    res.send("deleted successfully")
})


checkConnection();

app.listen(2000, () => {
    console.log("listening to the porrt http://localhost:2000");
})
