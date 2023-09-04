import { Request, Response, NextFunction} from "express"
import TweetModel from "../data/tweet/tweet.data"
import { returnSuccesfulSaved, succesfulSavedBody, succesfulSavedStatus } from "../response/response.success"
import { returnErrorFromMongo, returnErrorUnexpected } from "../response/response.error"

//TODO Save tweet
export const saveTweet = (req:Request,res:Response,next:NextFunction)=>{
    try{
        TweetModel.create({text:req.body.text,owner:req.body.userID})
            .then((response)=>{
                if(response){
                    returnSuccesfulSaved(res)
                }
            })
            .catch((exception)=>{
                returnErrorFromMongo(exception,res)
            })
    }catch(err){
        returnErrorUnexpected(err,res)
    }
}

//TODO Update tweet - Only the user call (Middleware)
export const updateTweet = (req:Request,res:Response,next:NextFunction)=>{
    try{
        TweetModel.updateOne({_id:req.body.tweetID},{text:req.body.text})
            .then((response)=>{
                returnSuccesfulSaved(res)
            })
            .catch((exception)=>{
                returnErrorFromMongo(exception,res)
            })
    }catch(err){
        returnErrorUnexpected(err,res)
    }
}

//TODO Delete (Soft delete) tweet - Only the user call (Middleware)
export const deleteTweet = (req:Request,res:Response,next:NextFunction)=>{
    try{
        TweetModel.updateOne({_id:req.body.id},{isDeleted:true})
        .then((response)=>{
            if(response){
                returnSuccesfulSaved(res)
            }
        })
        .catch((exception)=>{
            returnErrorFromMongo(exception,res)
        })
    }catch(err){
        returnErrorUnexpected(err,res)
    }
}

//TODO Get All tweet
export const getAllTweets = (req:Request,res:Response,next:NextFunction)=>{
    try{
        TweetModel.find({isDeleted:false})
            .then((tweets)=>{
                res.json({tweets:tweets})
            })
            .catch((exception)=>{
                returnErrorFromMongo(exception,res)
            })
    }catch(err){
        returnErrorUnexpected(err,res)
    }
}

//TODO Get User's tweet - Only the user call (Middleware)
export const getTweetsOfUser = (req:Request,res:Response,next:NextFunction)=>{
    try{
        TweetModel.find({isDeleted:false,owner:req.params.userID})
        .then((tweets)=>{
            res.json({tweets:tweets})
        })
        .catch((exception)=>{
            returnErrorFromMongo(exception,res)
        })
    }catch(err){
        returnErrorUnexpected(err,res)
    }
}

//TODO Like tweet tweet - Except from user (Middleware)
export const likeTweet = (req:Request,res:Response,next:NextFunction)=>{
    try{
        TweetModel.findOne({isDeleted:false,_id:req.body.tweetID})
            .then((tweet)=>{                
                if(!tweet?.likedBy.includes(req.body.userID.toString())){
                    tweet?.likedBy.push(req.body.userID.toString())
                    tweet?.save()
                        .then((response)=>{
                            if(response){
                                returnSuccesfulSaved(res)
                            }else{
                                returnErrorFromMongo("",res)
                            }
                        })
                        .catch((exception)=>{
                            returnErrorFromMongo(exception,res)
                        })
                }
                returnErrorFromMongo('User liked before',res)
            })
            .catch((exception)=>{                
                returnErrorFromMongo(exception,res)
            })
    }catch(err){        
        returnErrorUnexpected(err,res)
    }
}

//TODO Comment tweet tweet - Except from user (Middleware)
export const commentTweet = (req:Request,res:Response,next:NextFunction)=>{
    try{
        console.log(req.body.userID);
        const comment = req.body.comment
        const userID = req.body.userID
        TweetModel.findOneAndUpdate(
            { _id: req.body.tweetID, isDeleted: false },
            { $push: { comments: { userID:userID,comment:comment } } }
        )
            .exec()
            .then(() => {
                returnSuccesfulSaved(res)
            })
            .catch((err) => {
                returnErrorFromMongo(err,res)
            });
    }catch(err){
        returnErrorFromMongo(err,res)
    }
}