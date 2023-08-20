import jsonwebtoken from "jsonwebtoken"

export const generateToken = (payload:object):string => {
    return jsonwebtoken.sign(payload,"TechcareerNodeJSBootcamp",{expiresIn:1800})
}

export const verifyToken = (token:string) => {

}