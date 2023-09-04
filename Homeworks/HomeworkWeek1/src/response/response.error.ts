import { Response } from "express"

const errorFromMongoBody = {
    title:"Error in database!!",
    text:"An error is occured in database."
}
const unexpectedErrorBody = {
    title:"Opps!",
    text:"An error is occured in database."
}

const errorFromMongoStatus = 502 
const unexpectedErrorStatus = 503

export const returnErrorFromMongo = (err:any,res:Response) =>{
    console.log(err);
    res.status(errorFromMongoStatus).json(errorFromMongoBody)
}

export const returnErrorUnexpected = (err:any,res:Response) =>{
    console.log(err);
    res.status(unexpectedErrorStatus).json(unexpectedErrorBody)
}