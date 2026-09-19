import mongoose  from "mongoose";

const emojiSchema = mongoose.Schema({
    emoji:String,
    hexcode:String,
    group:String,
    subgroup:String,
    annotation:String,
    tags:Array,
    shortcodes:Array,
    emoticons:Array,
    directional:Boolean,
    variation:Boolean,
    variationBase:String,
    unicode:Number,
    order:Number,
    skintone:String,
    skintoneCombination:String,
    skintoneBase:String
},{timestamps:true})





const EmojiModel = new mongoose.model("emoji",emojiSchema);

const EmojiRecentModel = new mongoose.model("recentemoji",emojiSchema)


export {EmojiModel,EmojiRecentModel}