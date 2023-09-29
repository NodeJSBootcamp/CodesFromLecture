import express, { Request, Response, NextFunction } from "express"
import cors from 'cors'
import userRouter from "./router/userrouter"
import cors from 'cors';

const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


app.use("/user", userRouter)

export default app