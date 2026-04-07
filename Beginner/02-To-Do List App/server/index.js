import express from "express"
import connectDB from "./database/db.js";
import Todo from "./models/todo.models.js";

const app = express();


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// without cors

app.get("/api/todos",async (req,res)=>{
    const todoLists = await Todo.find();
    const totalDocs = await Todo.countDocuments();
    res.json({
        todoLists,
        count:totalDocs
    })
})
app.post("/api/todos",(req,res)=>{
    const {title} = req.body;

    Todo.create({
        title
    }).then((res)=>{
        console.log("title saved successfully");
    }).catch((err)=>{
        console.log("title didnot save successfully");
    })
})
app.patch("/api/todos/update/:id",async (req,res)=>{
    const {id} = req.params;
    const {title} = req.body;
    const updateTitle = await Todo.findByIdAndUpdate(id,{
        $set:{title :title}
    })
    if(updateTitle){
        console.log("List updated Successfully");
    }else{
        console.log("list didnot update!!!");
    }
})
app.delete("/api/todos/delete/:id",async (req,res)=>{
    const {id} = req.params;
    try {
        const deleteItem = await Todo.findByIdAndDelete(id);
        if(deleteItem){
            console.log("Item deleted Successfully!");
        }
    } catch (error) {
        console.log(error)
    }

})

// app.put("/api/todos/:id",(req,res)=>{
//     const {id} = req.params;
//     const {title} = req.body;

//     Todo.findByIdAndUpdate(id, {title}, {new: true}).then((updatedTodo)=>{
//         console.log("todo updated successfully");
//         res.json({success: true, updatedTodo})
//     }).catch((err)=>{
//         console.log("todo did not update successfully");
//         res.json({success: false, error: err})
//     })
// })




connectDB().then(()=>{
    app.listen(2000,()=>{
        console.log("listining to the http://localhost:2000/api/todos");
    })
})