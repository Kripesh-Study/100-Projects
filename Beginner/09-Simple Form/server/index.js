import dotenv from "dotenv";
dotenv.config();

import express from "express"
import UserModel from "./model/user.model.js";
import checkConnection from "./database/db.js";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', async (req, res) => {
    res.send("hello")
})
app.post('/register', async (req, res) => {

    const { name, email, password } = req.body.data;

    const emailRegex = /[a-z0-9]*@gmail.com/gmi;
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,255}/g;
    



    const user = await UserModel.findOne({email})
    if (user) {
        res.send("User Already Exists")
        console.log("Users already exists");

    } else {
        try {
            await UserModel.create({ name, email, password })
            res.send("User created successfully")
            console.log("User created successfully");

        } catch (error) {
            res.send("User didnot created")
            console.log("User didnot created");

        }
    }

})
app.post('/login', async (req, res) => {
    const { email, password } = req.body.data;
    console.log(email,password);
    try {
        const user = await UserModel.findOne({email})
        if (user) {
            if (user.password == password) {
                res.status(200).send("Login Successfully");
                console.log("Login successfully");

            } else {
                res.status(401).send("Invalid Crendentials");
                console.log("Invalid Crendentials");

            }
        }
    } catch (error) {
        res.status(401).send("Invalid Crendentials!")
        console.log("Invalid Crendentials");
    }
})




checkConnection();


app.listen(2000, () => {
    console.log("listening to the port http://localhost:2000");
})