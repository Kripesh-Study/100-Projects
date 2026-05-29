import { model, Schema } from "mongoose";


const quoteSchema = new Schema({
    quote:{
        type:String
    },
    author:String
})


const QuoteModel = new model("Quote",quoteSchema)

export default QuoteModel;