import express from "express"
import userRouter from "./router/user.router"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/user",userRouter)

export default app