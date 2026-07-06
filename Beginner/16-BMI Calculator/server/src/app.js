import "dotenv/config"
import express, { urlencoded } from "express"
import expressSession from "express-session"
import cors from "cors"
import HistoryModel from "./model/history.model.js"
import checkConnection from "./database/db.js"
import session from "express-session"




const app = express();
checkConnection();




app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], 
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Set-Cookie'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));
// app.options('*', cors());   // Handle preflight
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: process.env.SESSION_KEY || "hello world",
  resave: false,
  saveUninitialized: false,
  rolling: true,
  proxy: true,
  cookie: {
   httpOnly: true,
    secure: false,           // false for localhost
    sameSite: "lax",         // Very important for localhost
    maxAge: 1000 * 60 * 60 * 24
  },
}))



import router from "./routes/index.route.js"

app.use("/",router)



app.listen(2000, () => {
  console.log("listening to the port http://127.0.0.1:2000")
})