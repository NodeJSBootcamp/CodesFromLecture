import express,{ Request, Response, NextFunction} from "express"

const app = express()

app.use("/",(req:Request,res:Response,next:NextFunction)=>{
    res.sendStatus(500)
})

export default app