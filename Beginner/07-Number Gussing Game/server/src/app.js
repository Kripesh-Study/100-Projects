import "dotenv/config";
import express from "express";
import checkConneection from "./database/db.js"
import cors from "cors"



const app = express();
checkConneection();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



// router
import router from "./routes/index.router.js"
app.use("/",router)




app.listen(process.env.PORT,()=>{
    console.log(`listening to the port http://127.0.0.1:${process.env.PORT}`);
})