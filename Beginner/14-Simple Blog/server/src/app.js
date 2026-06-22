import "dotenv/config"
import express from "express"
import cors from "cors"
import checkConnection from "./database/db.js"
import blogModel from "./model/blog.model.js"


const app = express();
checkConnection();

app.use(cors())
app.use(express.json())



app.get("/",async(req,res)=>{
    const blogs = await blogModel.find();
    res.send(blogs)
})

app.post("/",async(req,res)=>{
    const {id} = req.body;
    const response = await blogModel.findOne({_id:id})
    res.send(response)
})


app.listen(2000,()=>{
    console.log("listening to the  port http://127.0.0.1:2000");
})