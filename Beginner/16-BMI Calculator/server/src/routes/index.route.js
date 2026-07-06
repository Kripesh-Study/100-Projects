import { Router } from "express";
import HistoryModel from "../model/history.model.js";

const route = Router()

route.get("/history", async (req, res) => {
  console.log(req.session.id)
  req.session.visited = true;
  try{
    const history = await HistoryModel.find({ session_id: req.sessionID }).sort({ createdAt: -1 })
    res.json(history)
  } catch (error) {
    res.status(500).json({ message: "Unable to load history" })
  }
})

route.post("/history", async (req, res) => {
  try {
    const { score } = req.body
    console.log(score);
    

    if (score === undefined || score === null) {
      return res.status(400).json({ message: "BMI score is required" })
    }

    const savedEntry = await HistoryModel.create({
      session_id: req.sessionID,
      score: Number(score),
    })
    console.log(savedEntry)
    res.status(201).json(savedEntry)
  } catch (error) {
    res.status(500).json({ message: "Unable to save BMI history" })
  }
})

route.delete("/history/clear", async (req, res) => {
  try {
    await HistoryModel.deleteMany({ session_id: req.sessionID })
    res.json({ message: "Session history cleared" })
  } catch (error) {
    res.status(500).json({ message: "Unable to clear session history" })
  }
})

export default route;