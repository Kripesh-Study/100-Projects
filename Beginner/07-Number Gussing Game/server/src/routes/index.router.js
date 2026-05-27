import { Router } from "express";
import { RandNumberModel, BestScoreModel } from "../model/random.model.js"


const router = Router();


router.get("/", async (req, res) => {
    try {
        const bestScore = await BestScoreModel.findOne()
        res.send({ bestScore: bestScore.bestScore })
    } catch (error) {
        res.status(500).send("Number cannot saved")
    }
})
router.get("/randNum", async (req, res) => {
    const randNum = (Math.floor(Math.random() * 100))
    try {
        console.log(randNum)
        await RandNumberModel.updateOne(
            { _id: '6a132cf25eb905404e794507' },
            { $set: { number: randNum } }
        );


        res.send({ message: "successfully created random number" })

    } catch (error) {
        res.status(500).send("Number cannot saved")
    }
})
router.post("/verify", async (req, res) => {
    const { num,score } = req.body;
    try {
        const userNum = await RandNumberModel.findOne()
        console.log(userNum.number)
        console.log(num)
        if (num == userNum.number) {
           
           const resp =  await BestScoreModel.updateOne(
                { _id: '6a1579d0ff55052eecacabc9' },
                { $min: { bestScore: score+1} }
            );
            console.log(resp)
            res.send({ message: "Congraulation! You Got it!", gameOver: true })
        } else if (num > userNum.number) {
            res.send({ message: `Number is Lower than ${num}`, gameOver: false })
        } else if (num < userNum.number) {
            res.send({ message: `Number is Higher than ${num}`, gameOver: false })
        } else {
            res.status(500).send("something went wrong")
        }

    } catch (error) {
        res.status(500).send("Number cannot submitted");
    }

})



export default router;