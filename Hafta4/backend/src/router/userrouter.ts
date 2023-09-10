import express from "express"
import * as UserController from "../controller/user.controller"
const userRouter = express.Router()

userRouter.use(express.json());

userRouter.post("/save",UserController.save)


export default userRouter