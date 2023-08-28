import { Request, Response, NextFunction} from "express"
import { generateToken } from "../utils/jwt.utils"
import { userTable } from "../utils/tables"
import { UserInsertion } from "../../types/databaseAggregation"
import supabase from "../database/supabase.client"

export const register = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const userData:UserInsertion = {
            username: req.body.username as string,
            password: req.body.password as string,
        }
        const { data, error } = await supabase.from(userTable).insert([userData]).select()
        res.json({data:data}) 
    }catch(error){
        console.error(error);
        res.sendStatus(500)
    }
}

export const login = async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const { data, error } = await supabase
        .from(userTable)
        .select("*")   
        .eq("username",req.body.username)
        .eq("password",req.body.password)
        res.json({data:data}) 
    }catch(error){
        console.error(error);
        res.sendStatus(500)
    }
}

export const deleteUser = (req:Request,res:Response,next:NextFunction)=>{
    
}

//TODO Update user - not restirected to give all attributes (Middleware)