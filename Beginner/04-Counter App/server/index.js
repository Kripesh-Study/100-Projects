import dotenv from "dotenv";
dotenv.config();
import express from "express"
import checkConnection from "./database/db.js"
checkConnection()
import counterModel from "./model/counter.model.js"
import cors from "cors"




const app = express();

app.use(cors())



app.get('/',async (req,res)=>{
    const number =  await counterModel.find();
    res.send(number[0].number);
})

app.put('/inc',async (req,res)=>{
   const updatedInc =  await counterModel.updateOne(
    {_id:"6a0189e6f1582f30ba8e57e2"},
    {$inc:{number:1}}
);
console.log("Increased successfully ")
res.send(updatedInc)
   
})
app.put('/dec',async (req,res)=>{
    const updatedInc = await counterModel.updateOne(
        {_id:"6a0189e6f1582f30ba8e57e2"},
        {$inc:{number:-1}}
    )
    console.log("Decrease successfully")
    res.send(updatedInc)

})
app.put('/rst',async(req,res)=>{
    const updatedInc = await counterModel.updateOne(
        {_id:"6a0189e6f1582f30ba8e57e2"},
        {number:0}
    )
    console.log("Reset successfully")
    res.send(updatedInc)
})






app.listen(2000,()=>{
    console.log(`listening to the port http://localhost:2000`);
})