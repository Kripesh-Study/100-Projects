import "dotenv/config"
import express from "express"
import QuoteModel from "./model/quotes.model.js"
import checkConnection from "./database/db.js"
import cors from "cors"



checkConnection();
const app = express();


app.use(cors())


app.get("/quotes",async(req, res)=>{
    const response = await QuoteModel.find().select("-_id");
    const randNum = await Math.floor(Math.random()*response.length)
    const randomQuote = response[randNum]
    res.send(randomQuote)
})









app.listen(process.env.PORT,()=>{
    console.log("listening to the port http://127.0.0.1:2000");
})

