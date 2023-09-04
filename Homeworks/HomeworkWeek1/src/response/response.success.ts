import { Response } from "express"

export const succesfulSavedBody = {
    title:"Yuhhuu",
    text:"Tweet is posted."
}
export const succesfulRegisterBody = {
    title:"Welcome",
    text:"You became a member of Tweeto"
}

export const succesfulRegisterStatus = 200
export const succesfulSavedStatus = 200

export const returnSuccesfulSaved = (res:Response) =>{
    res.status(succesfulSavedStatus).json(succesfulSavedBody)
}

export const returnSuccesfulRegister = (res:Response) =>{
    res.status(succesfulRegisterStatus).json(succesfulRegisterBody)
}
