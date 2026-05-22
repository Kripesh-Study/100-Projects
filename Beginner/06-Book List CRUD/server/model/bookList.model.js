import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    bookTitle:{
        type:String,
        required:true,
    },
    author:{
        type:String,
    }
})


const BookModel = new model("BooksDetail",bookSchema)

export default BookModel;