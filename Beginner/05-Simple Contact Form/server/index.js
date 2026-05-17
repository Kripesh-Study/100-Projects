import dotenv from "dotenv"
dotenv.config();

import express from "express";
import cors from "cors"
import checkConnection from "./database/db.js"
import {FormModel} from "./model/fromDetail.model.js";


const app = express();
checkConnection();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.post('/',async(req, res)=>{
    const data = req.body;
    console.log(data)
    const savedData = await FormModel.create(data)
    if(savedData){
        res.send("Successfully saved contact form")
        console.log("Successfully saved contact form")
    }else{
        res.send("Can't saved contact form")
        console.log("Can't saved contact form")
    }
})


app.listen(2000,()=>{
    console.log("listening to the port http://127.0.0.1:2000");
})