import express, { Request, Response, NextFunction } from "express"

const app = express()
app.use("/",(req:Request, res:Response, next:NextFunction)=>{
    res.json({data:"Server is on"})
})

export default app