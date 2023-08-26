import express, { Request, Response, NextFunction } from "express";
import axios from "axios"
import { userServicePort } from "../config"
const router = express.Router()

router.use("/user/:path",async(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.params.path);
    if(req.params.path == "register"){
        const instance = axios.create({
            proxy:{
                host:"127.0.0.1",
                port:8000,
            },
        })
        
        const response = await instance.post("http://localhost:" + userServicePort +"/user/" + req.params.path,
          {
            username: req.body.username,
            password: req.body.password
          }
        )
        const responseData = response.data
        res.json({data:responseData})
    }
})  

router.use("/tweet/:path",(req:Request,res:Response,next:NextFunction)=>{
    
})

export default router;