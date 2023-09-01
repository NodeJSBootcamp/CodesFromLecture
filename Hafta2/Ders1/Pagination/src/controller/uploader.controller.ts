import { Request, Response, NextFunction } from "express";

export const uploadFile = (req:Request,res:Response,next:NextFunction) =>{
    const { file } = req;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    return res.status(200).json({ message: 'File uploaded successfully', file });
}