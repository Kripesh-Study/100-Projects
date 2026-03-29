import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.json({
        message:"Hello World API"
    })
})

app.listen(2000,()=>{
    console.log(`listening to the http://localhost:2000`);
})