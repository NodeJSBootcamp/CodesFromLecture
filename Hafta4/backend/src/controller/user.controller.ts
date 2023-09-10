import { Request, Response, NextFunction } from "express"
import UserModel from "../data/user.data"
import Userprefmodel from "../data/userpref.data"
import mongoose from "mongoose"
import JWT from 'jsonwebtoken'
import dotenv from "dotenv"

export const save = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body

    UserModel.create({ username: username, password: password }).then(
        (response) => {
            if (response) {
                createUserPref(response._id, res)
            }
            else {
                console.error("hata var");

                res.json({ errormessage: " veritabanında hata oldu" })
                    .sendStatus(500)
            }
        }
    )
        .catch(
            (error) => {
                res.json({ errormessage: error })
                    .sendStatus(500)
            }
        )

}



const createUserPref = (id: mongoose.Types.ObjectId, res: Response) => {
    Userprefmodel.create({ userId: id, email:"", gender: "", phone:"" })
        .then(
            (responseFromUserpref) => {
                if (responseFromUserpref) {
                    console.log("başarılı kaydedildi");
                    res.sendStatus(200)

                }
            }
        )
}


export const updateUserPref= (req: Request, res: Response, next: NextFunction)=>{
    //const userId=req.userId;
    const userId=req.body.userId
     console.log("userId", userId)
    const {email, gender, phone}=req.body;

    type UserObj={
        email?: string,
        gender?: string,
        phone?: string

    }
    const obj: UserObj={}

    if(email){
        obj['email']=email
    }

    if(gender){
        obj['gender']=gender
    }
    if(phone){
        obj['phone']=phone
    }

     console.log("obje: ", obj)
    const user= new mongoose.Types.ObjectId(userId)
 console.log("user",user)
    Userprefmodel.updateOne({userId: user}, obj).then((response)=>{
         console.log(response)
        if(!response || response.modifiedCount===0){
            return res.status(500).json({message: "Update Error"})
        }

        // for(const key in obj ){

        //     if(Object.prototype.hasOwnProperty.call(obj, key)){
        //         if(obj[key as string]!==null){

        //         }
        //     }
        // }
        res.status(200).json({message:response})
    }).catch((err)=>{
         console.log(err)
        res.status(500).json({message:err})

    })

}

export const login= (req: Request, res: Response)=>{
    dotenv.config()
     console.log("process.env.JWT_SECRET_KEY: ",process.env.JWT_SECRET_KEY)
   try{
    const {username, password}=req.body;

    if(!username || !password){
        return res.status(404).json({message: "Username and password required!"})
    }

    UserModel.findOne({username, password}).then((response)=>{
        if(!response){
            return res.status(500).json({message: "User not found"})
        }
        const payload={userId: response._id}
        const token=JWT.sign(payload, process.env.JWT_SECRET_KEY ?? "", {expiresIn: "1d"})

        res.status(200).json({token})
        
    }).catch((err)=>{
         console.log(err)
         res.status(500).json({message: err})
    })
   }catch(err){
     console.log(err)
    res.status(500).json({message: err})
   }

}