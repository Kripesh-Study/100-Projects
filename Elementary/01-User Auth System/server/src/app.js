import "dotenv/config"
import express, { urlencoded } from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser'


import checkConnection from "./database/db.js";



checkConnection();
const app = express();
const port = process.env.PORT || 2000;


// middleware
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())





// imort routes
import router from "./routes/index.route.js"
app.use("/",router)




app.listen(port,()=>{
    console.log(`listening to the port http://localhost:2000`);
})


