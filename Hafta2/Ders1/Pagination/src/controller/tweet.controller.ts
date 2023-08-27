import { Request, Response, NextFunction } from "express";
import TweetModel from "../data/tweet/tweet.data";

//TODO Save tweet
export const saveTweet = (req:Request,res:Response,next:NextFunction) =>{
    TweetModel.create({comment:req.body.comment})
        .then((response)=>{
            if(response){
                res.sendStatus(200)
            }
        })
        .catch((err)=>{
            console.log(err);
            res.sendStatus(500)
        })
}
//TODO Update tweet - Only the user call (Middleware)
//TODO Delete (Soft delete) tweet - Only the user call (Middleware)
//TODO Get All tweet
export const getAllTweet = (req:Request,res:Response,next:NextFunction) =>{
    try{
        const pageIndex = parseInt(req.query.pageIndex as string)
        const pageSize = parseInt(req.query.pageSize as string)
        TweetModel.find().skip(pageIndex * pageSize).limit(pageSize)
            .then((response)=>{
                const nextPage = "http://localhost:8000/tweet/get/all?pageIndex="+(pageIndex+1)+"&pageSize="+pageSize
                res.setHeader("_link",nextPage).json({data:response})
            })
            .catch((err)=>{
                console.log(err);
                res.sendStatus(500)
            })
    }catch(err){
        console.log(err);
        res.sendStatus(500)
    }
    
}
//TODO Get User's tweet - Only the user call (Middleware)
//TODO Like tweet tweet - Except from user (Middleware)
//TODO Command tweet tweet - Except from user (Middleware)