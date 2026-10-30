import { Router } from "express";
import UserModel from "../model/users.model.js";
import bcryptHash from "../middleware/register.middleware.js";
import auth from "../middleware/login.middleware.js";
import jwt from 'jsonwebtoken'
import checkTokenMiddleware from "../middleware/authorization.middleware.js";


const router = Router();


router.route("/register").post(async(req,res)=>{
    const {name,email,password} = req.body;
    try {
        const userExists = await UserModel.findOne({email});
        if(userExists){
            console.log("user already exists");
            return res.send("user already exists")
        }
         const hashPassword = await bcryptHash(password)
        console.log(hashPassword)
        const userData = await UserModel.create({email,password:hashPassword,name})
        console.log(userData);
        res.send("created account successfully");
    } catch (error) {
        console.log("error occured:=>",error);
        res.status(500).json({
            message:"Something went wrong"
        })
    }

})

router.route("/login").post(async(req,res)=>{
    const {email,password} = req.body;
    console.log(email,password);
    try {
        const user = await UserModel.findOne({email});
        if(!user){
            console.log("user not available");
            return res.status(401).json({message:"Invalid credentials"});
        }
        const hashpwd = user.password;
        const login = await auth(password,hashpwd)
        if(!login){
            console.log("invalid credentials");
            return res.status(401).json({message:"Invalid credentials"});
        }
        const token = jwt.sign({email:email},process.env.SECRETKEY_JWT);
        console.log(token);
        res.cookie("token",token,{
            path:'/',
            httpOnly:true,
            secure: false,  
            sameSite:'lax'
        })
        return res.status(200).json({message:"Login successful"});

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({message:"Something went wrong"});
    }
})


router.route("/dashboard").get(checkTokenMiddleware,async(req,res)=>{
    const email = req.email;
    res.send({email})
})





export default router;





































