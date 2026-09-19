import "dotenv/config"

import express from 'express'
import cors from 'cors'
import checkConnection from "./database/db.js";





const app = express()
checkConnection();
const port = process.env.PORT || 2000;


// middleware
app.use(cors())
app.use(express.json())




// Router 
import routes from "./routes/index.router.js"
app.use("/",routes)







app.listen(port, ()=>{
    console.log(`listening to the port http://localhost:2000`);
})