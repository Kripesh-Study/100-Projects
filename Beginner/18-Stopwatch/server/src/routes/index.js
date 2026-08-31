import { Router } from "express";   
import LapModel from "../model/lap.model.js"


const router = Router();


router.get("/",(req,res)=>{
    res.send("hello")
})

router.post("/laps",async(req,res)=>{
    const laps = req.body;
    console.log(typeof(laps));
    try {
        console.log("laps iside trycatch")
        await LapModel.create(laps)
        res.status(200).send("laps created successfully");
    } catch (error) {
        res.send(error)
    }

})


export default router;