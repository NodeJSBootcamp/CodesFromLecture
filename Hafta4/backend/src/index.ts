import express, { Request, Response, NextFunction } from "express"
import userRouter from "./router/userrouter"
const app = express()

app.use(express.json())

app.use("/user",userRouter)

export default app