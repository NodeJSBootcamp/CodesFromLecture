import { Request,Response,NextFunction } from "express";
import ChatModel from "../data/chat/chat.data";



export const createGroup = (req:Request, res:Response, next:NextFunction) =>{
    ChatModel.create({groupName:req.body.groupName,admin:req.body.username})
        .then((response)=>{
            if(response){
                res.json({chatID:response._id})
            }else{
                res.sendStatus(500)
            }
        })
}


export const addUser = (req:Request, res:Response, next:NextFunction) =>{

}
