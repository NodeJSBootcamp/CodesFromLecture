import express from "express"
import userRouter from "./router/user.router"
import { logError } from "../errorhandler/error.handler"


const app = express()
app.use(logError)
app.use(express.json())
app.use("/user",userRouter)

export default app