import express, { Request, Response, NextFunction } from "express"
import userRouter from "./router/user.router"
import dotenv from "dotenv"
import { logError } from "./errorhandler/error.handler"
dotenv.config()
const app = express()

app.use(express.json())
app.use("/user",userRouter)
app.use(logError)
export default app