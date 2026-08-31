import "dotenv/config"
import express from "express"
import checkConnection from "./database/db.js"
import LapModel from "./model/lap.model.js"
import cors from "cors"


const app = express();
checkConnection();

// using middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// importing routes
import router from "./routes/index.js";
app.use("",router)

app.listen(3000,()=>{
    console.log("listening to the port http://localhost:3000");
})