import express from "express"
import userRouter from "./router/user.router"


const app = express()
app.use(express.json())
app.use("/user",userRouter)

export default app