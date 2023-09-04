import express from "express"
import * as tweetController from "../controller/tweet.controller"
import onlyUser from "../middleware/onlyuser.middleware"
import exceptUser from "../middleware/expectuser.middleware"
const tweetRouter = express.Router()


tweetRouter.post("/like",tweetController.likeTweet)
tweetRouter.post("/comment",tweetController.commentTweet)
tweetRouter.post("/save",tweetController.saveTweet)
tweetRouter.post("/update",[onlyUser],tweetController.updateTweet)
tweetRouter.post("/delete",[onlyUser],tweetController.deleteTweet)
tweetRouter.get("/all",tweetController.getAllTweets)
tweetRouter.post("/:userID",[onlyUser],tweetController.getTweetsOfUser)


export default tweetRouter;