import { Request, Response, NextFunction} from "express"
import UserModel from "../data/user/user.data"
import { generateToken } from "../utils/jwt.utils"
import { emailSend } from "../email/email.sender"
import { otpGenerate } from "../email/otp.generator"
import OtpModel from "../data/user/otp.data"

export const register = (req:Request,res:Response,next:NextFunction)=>{
    try{
        UserModel.create({username:req.body.username,password:req.body.password})
            .then((result)=>{
                if(result){
                    const otpData = otpGenerate()
                    const emailText = req.body.username + " has succesfully registered. OTP code is " + otpData.otp;
                    OtpModel.create({username:result.username,otp:otpData.otp,expritaionTime:otpData.expirationTime})
                        .then((resultForOtp)=>{
                            if(resultForOtp){
                                //@TODO Please put your email here or email address u wanna send email
                                emailSend("rabiakahya22@gmail.com","User Auth",emailText,res)
                            }
                    })
                    
                }
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

export const verify = (req:Request,res:Response,next:NextFunction)=>{
    OtpModel.find({username:req.body.username})
        .then((value)=>{        
            if(value.length > 0){
                value.sort((a,b)=>Date.parse(a.expritaionTime)>Date.parse(b.expritaionTime) ? -1 : 1)
                console.log(value);
                if(req.body.otpCode == value[0].otp && Date.parse(value[0].expritaionTime) > new Date().getTime()){
                    OtpModel.deleteMany({username:req.body.username})
                        .then((responseOtpDelete)=>{
                            if(responseOtpDelete){
                                UserModel.updateOne({username:req.body.user},{isVerified:true})
                                    .then((response)=>{
                                        if(response){
                                            res.sendStatus(200)                                       
                                        }else{
                                            res.sendStatus(501)
                                        }
                                    })
                            }else{
                                res.sendStatus(501)
                            }
                        })
                    
                }else{
                    res.sendStatus(500)
                }
            }else{
                res.sendStatus(500)
            }
            
        })
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