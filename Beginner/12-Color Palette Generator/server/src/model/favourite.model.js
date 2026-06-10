import mongoose, { model, Schema } from "mongoose"

const favouriteSchema = new Schema({
    favouriteColor:String
})


const FavouriteModel = new model("FavouriteColor",favouriteSchema)

export default FavouriteModel;