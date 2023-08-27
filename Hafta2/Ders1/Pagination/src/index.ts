import express from "express"
import userRouter from "./router/user.router"
import tweetRouter from "./router/tweet.router"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user",userRouter)
app.use("/tweet",tweetRouter)

export default app