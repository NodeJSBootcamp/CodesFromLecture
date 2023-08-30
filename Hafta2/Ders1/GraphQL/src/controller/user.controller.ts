import { Request, Response, NextFunction} from "express"
import { generateToken } from "../utils/jwt.utils"
import { userTable } from "../utils/tables"
import { UserInsertion } from "../../types/databaseAggregation"
import supabase from "../database/supabase.client"
import { log } from "console"

export const register = async(username:string,password:string):Promise<boolean>=>{
    try{
        const userData:UserInsertion = {
            username: username as string,
            password: password as string,
        }
        const { data, error } = await supabase.from(userTable).insert([userData]).select()
        if(error){
            return false;
        }
        if(data.length == 0){
            return false;
        }
        return true;
    }catch(error){
        console.error(error);
        return false;
    }
}

export const login = async(username:string,password:string):Promise<boolean>=>{
    try{
        const { data, error } = await supabase
        .from(userTable)
        .select("*")   
        .eq("username",username)
        .eq("password",password)
        if(error){
            return false;
        }
        if(data.length == 0){
            return false;
        }
        return true; 
    }catch(error){
        console.error(error);
        return false;
    }
}

export const deleteUser = (req:Request,res:Response,next:NextFunction)=>{
    
}

//TODO Update user - not restirected to give all attributes (Middleware)