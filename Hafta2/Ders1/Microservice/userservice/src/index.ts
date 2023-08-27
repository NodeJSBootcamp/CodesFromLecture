import express from "express"
import userRouter from "./router/user.router"
import { createProxyMiddleware } from "http-proxy-middleware"


const app = express()
app.use(express.json())
app.use("/user",userRouter)

export default app