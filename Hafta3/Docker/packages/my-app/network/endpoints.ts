export const baseURLForDev = "http://localhost:8000"
export const baseURLForProd = "http://www.kariyernet.com"

export const loginEndpoint = "/user/login"
export const registerEndpoint = "/user/register"


export const getProdUrl = (url:string) => baseURLForProd + url

export const getDevUrl = (url:string) => baseURLForDev + url