import { Request, Response, NextFunction } from "express"
import UserModel from "../data/user.data"
import Userprefmodel from "../data/userpref.data"
import mongoose from "mongoose"
import JWT from 'jsonwebtoken'
import dotenv from "dotenv"

export const save = (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body

    UserModel.create({ username: username, passsword: password }).then(
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
    Userprefmodel.create({ userId: id })
        .then(
            (responseFromUserpref) => {
                if (responseFromUserpref) {
                    console.log("başarılı kaydedildi");
                    res.sendStatus(200)

                }
            }
        )
}

const updateUserPref= (req: Request, res: Response)=>{
    const {email, gender, phone}=req.body;

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
        const payload={userId: response._id.toString()}
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