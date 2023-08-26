import { Request, Response, NextFunction} from "express"
import UserModel from "../data/user/user.data"
import { generateToken } from "../utils/jwt.utils"
import { emailSend } from "../email/email.sender"

export const register = (req:Request,res:Response,next:NextFunction)=>{
    try{
        UserModel.create({username:req.body.username,password:req.body.password})
            .then((result)=>{
                const emailText = req.body.username + "has succesfully registered"
                //@TODO Please put your email here or email address u wanna send email
                emailSend("user email","User Auth",emailText,res)
            })
            .catch((exception)=>{
                console.error(exception);
                res.sendStatus(500)
            })
       
    }catch(error){
        console.error(error);
        res.sendStatus(500)
    }
}

export const login = (req:Request,res:Response,next:NextFunction)=>{
    UserModel.findOne({username:req.body.username,password:req.body.password,isDeleted:false})
        .then((value)=>{
            if(value){
                return generateToken({username:req.body.username,isAdmin:value.isAdmin})
            }
        })
        .then((jwtToken)=>{
            res.json({token:jwtToken})
        })
        .catch((exception)=>{
            console.error(exception);
            res.sendStatus(500)
        })
}

export const deleteUser = (req:Request,res:Response,next:NextFunction)=>{
    UserModel.updateOne({username:req.body.username},{isDeleted:true})
        .then((result)=>{
            console.log(result);
            
            if(result){
                res.sendStatus(200)
            }else{
                res.sendStatus(500)
            }
        })
        .catch((exception)=>{
            console.error(exception);
            res.sendStatus(500)
        })
}

//TODO Update user - not restirected to give all attributes (Middleware)