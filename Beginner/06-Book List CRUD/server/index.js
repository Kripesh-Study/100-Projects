import "dotenv/config"

import express from "express"
import cors from "cors"
import checkConnection from './database/db.js';
import BookModel from './model/bookList.model.js'


const app = express();
checkConnection();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/',async (req,res)=>{
    const books = await BookModel.find()
    res.send(books)


    // res.send("hello hi")
})

app.post('/add',async (req,res)=>{
    const {title,author} = req.body;
    console.log(title,author)
    try {
        await BookModel.create({bookTitle:title,author})
        console.log("successfully added book")
        res.send("deleted successfully")
    } catch (error) {
        res.send("cannot saved")
        console.log("book didnot add successfully")
    }
})

app.put('/edit',async (req,res)=>{
    const {id,title,author} = req.body;
    console.log(id,title,author);
    try {
        await BookModel.findOneAndUpdate({_id:id},{bookTitle:title,author});
        console.log("update successfully")
        res.send("updated successfully")
    } catch (error) {
        res.send("something went worng while updating")
        console.log("something wrong while updating")   
    }
})

app.delete('/delete',async(req,res)=>{
    const {id}  = req.body;
    console.log(id)
    try {
        await BookModel.findOneAndDelete({_id:id})
        console.log("successfully deleted")
        res.send("successfully deleted")
    } catch (error) {
        console.log("something went wrong while deleting")
        res.send("something went wrong while deleting")
    }
})

app.listen(2000,()=>{
    console.log("listening to the port http://127.0.0.1:2000");
})