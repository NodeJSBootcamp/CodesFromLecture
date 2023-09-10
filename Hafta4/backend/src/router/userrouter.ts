import express from "express"
import * as UserController from "../controller/user.controller"
import { verifyJWT } from "../middleware/verifyJWT.middleware";
const userRouter = express.Router()

userRouter.use(express.json());

userRouter.post("/save",UserController.save)
userRouter.post("/login", UserController.login )


export default userRouter