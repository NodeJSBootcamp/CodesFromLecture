import { Request,Response,NextFunction } from "express";

export const toUpperCase = (req:Request,res:Response,next:NextFunction) =>{
    //upper case
    const data = req.body.value
    const temp = data.toUpperCase()
    res.send({data:temp})
}

export const toLowerCase = (req:Request,res:Response,next:NextFunction) =>{
    //lower case
    res.send({data:req.body.value.toLowerCase()})
}