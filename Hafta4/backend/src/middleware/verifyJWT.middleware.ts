import {Request, Response, NextFunction} from 'express'
import JWT, {JwtPayload} from 'jsonwebtoken'

interface CustomReq extends Request{
    userId: string
}

export const verifyJWT= (req: CustomReq, res: Response, next: NextFunction)=>{
   try{
    const token= req.headers["authorization"];
    if(!token){
        res.status(401).json({message: "Unauthorized access"});
    }

    JWT.verify(token as string, process.env.JWT_SECRET_KEY, (err, decoded)=>{
        if(err){
            return res.status(401).json({message: err});
        }
    
        const { userId } = decoded as JwtPayload;
        req.userId=userId
        next()

    } )
   } catch(err){
     console.log(err)
     res.status(401).json({message: err});
   }
}