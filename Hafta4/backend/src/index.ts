import express, { Request, Response, NextFunction } from "express"
import cors from 'cors'
import userRouter from "./router/userrouter"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/user",userRouter)

export default app