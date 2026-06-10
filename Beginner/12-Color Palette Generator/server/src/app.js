import "dotenv/config"
import express from "express"
import cors from "cors"
import checkConnection from "./database/db.js"
import favouriteModel from "./model/favourite.model.js"

// check connection
checkConnection();


const app = express();

// middleware
app.use(cors())
app.use(express.json())


// router
import favouriteRouter from "./router/favourite.router.js"
app.use("/favourite",favouriteRouter)


app.listen(2000,()=>{
    console.log("listening to the port http://localhost:2000")
})