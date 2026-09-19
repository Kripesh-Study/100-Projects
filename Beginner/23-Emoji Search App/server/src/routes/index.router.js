import { Router } from "express";
import { EmojiModel, EmojiRecentModel } from "../model/emoji.model.js";

const route = Router();




route.route("/").get(async (req, res) => {
    const { q } = req.query;
    let emojies;
    try {
        emojies = await EmojiModel.find().select("-annotation -directional -emoticons -hexcode -shortcodes -skintone -skintoneBase -skintoneCombination -variation -variationBase");
        if (q !== undefined && q !== "") {
            emojies = await EmojiModel.find({ tags: { $regex: q, $options: 'i' } }).select("-annotation -directional -emoticons -hexcode -shortcodes -skintone -skintoneBase -skintoneCombination -variation -variationBase");
        }
    } catch (error) {
        res.send(error)
    }
    // console.log(emojies)
    res.status(200).send(emojies)
})



route.route("/recent")
    .get(async (req, res) => {
        try {
            const recentEmo = await EmojiRecentModel.find().sort({ updatedAt: -1 }).limit(10).lean();
            console.log(recentEmo)
            res.status(200).send(recentEmo)
        } catch (error) {
            console.error("GET Error:", error);
            res.status(400).send("error : ", error)
        }
    })
    .post(async (req, res) => {
        const {recentEmo} = req.body;
        try {
            await EmojiRecentModel.insertMany(recentEmo)
            res.send("SAVED SUCCESSFULLY")
            console.log('SAVED SUCCESSFULLY')
        } catch (error) {
            console.log('CANNOT SAVED SUCCESSFULLY')
            res.send('CANNOT SAVED SUCCESSFULLY')
        }
    })




export default route;