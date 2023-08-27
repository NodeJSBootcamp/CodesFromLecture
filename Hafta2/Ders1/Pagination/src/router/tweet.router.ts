import express from "express"
import * as tweetController from "../controller/tweet.controller"
const tweetRouter = express.Router()


tweetRouter.post("/save",tweetController.saveTweet)
tweetRouter.post("/get/all",tweetController.getAllTweet)

export default tweetRouter;