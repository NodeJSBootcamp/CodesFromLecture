import { Request, Response, NextFunction } from "express"
import UserModel from "../data/user.data"
import Userprefmodel from "../data/userpref.data"
import mongoose from "mongoose"
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