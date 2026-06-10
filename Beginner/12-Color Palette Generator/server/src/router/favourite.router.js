import express from "express"
import favouriteModel from "../model/favourite.model.js";
const router = express.Router();



router.route("/").get(async (req,res)=>{
    const fav = await favouriteModel.find()
    console.log(fav)
    res.send(fav)
}).post(async (req,res)=>{
    const {isFavourite,randomColor} = req.body;
    if(isFavourite){
        try {
            await favouriteModel.create({favouriteColor:randomColor})
            console.log("successfully liked")
            res.send("successfully liked")
        } catch (error) {
            
            console.log("can't liked")
            res.send("can't liked")
        }
    }else{
        try {
            await favouriteModel.findOneAndDelete({favouriteColor:randomColor})
            console.log("successfully")
            res.send("successfully disliked")
        } catch (error) {
            
            console.log("can't disliked")
            res.send("can't disliked")
        }
    }
})



export default router;