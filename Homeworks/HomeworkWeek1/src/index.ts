import express, { Request, Response, NextFunction } from "express"
import userRouter from "./router/user.router"
import tweetRouter from "./router/tweet.router"
import { verifyToken } from "./utils/jwt.utils"
import UserModel from "./data/user/user.data"
import { returnErrorUnexpected } from "./response/response.error"


const app = express()
app.use(express.json())
app.use("/user",userRouter)
app.use("/tweet",(req:Request,res:Response,next:NextFunction)=>{
    const jwtToken = req.headers["authorization"] as string
    const verifyTokenResult = verifyToken(jwtToken)
    UserModel.findOne({username:verifyTokenResult.username})
        .then((user)=>{
            if(user){
                req.body.userID = user._id
                next()
            }else{
                returnErrorUnexpected("Wrong key",res)
            }
        })
        .catch((error)=>{
            returnErrorUnexpected(error,res)
        })
},tweetRouter)

export default app