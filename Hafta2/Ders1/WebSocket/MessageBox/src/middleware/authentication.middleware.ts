import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../utils/jwt.utils"


export const authtenticateForAdmin = (req:Request, res:Response, next:NextFunction) =>{
    const jwtToken = req.headers["authorization"] as string
    const verifyTokenResult = verifyToken(jwtToken)
    if(verifyTokenResult.isAdmin){
        next()
    }else{
        res.sendStatus(500)
    }
}

export const authtenticateForUser = (req:Request, res:Response, next:NextFunction) =>{
    const jwtToken = req.headers["authorization"] as string
    const verifyTokenResult = verifyToken(jwtToken)
    if(verifyTokenResult.username != null){
        req.body.username = verifyTokenResult.username 
        next()
    }else{
        res.sendStatus(500)
    }
}