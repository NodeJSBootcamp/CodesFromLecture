import {Request, Response, NextFunction} from 'express'
import JWT, {JwtPayload} from 'jsonwebtoken'
import dotenv from 'dotenv'

export const verifyJWT= (req: Request, res: Response, next: NextFunction)=>{
    dotenv.config()
   try{
    const token= req.headers["authorization"];
    if(!token){
        res.status(401).json({message: "Unauthorized access"});
    }

    JWT.verify(token as string, process.env.JWT_SECRET_KEY as string, (err, decoded)=>{
        if(err){
            return res.status(401).json({message: err});
        }
    
        const { userId } = decoded as JwtPayload;
        // req.userId=userId
      req.body.userId=userId
        next()

    } )
   } catch(err){
     console.log(err)
     res.status(401).json({message: err});
   }
}