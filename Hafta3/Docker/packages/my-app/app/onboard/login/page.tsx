"use client"
import { useAxiosWithoutAuthentication } from "@/helpers/withoutauth.axios.hook"
import { getDevUrl, loginEndpoint } from "@/network/endpoints"
import NetworkManager from "@/network/network.manager"
import { useEffect, useState } from "react"

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const networkManager:NetworkManager = useAxiosWithoutAuthentication()

    const handlerButtonOnClick = (event:React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault()
        //TODO password must be encrepted
        networkManager.post(getDevUrl(loginEndpoint),{
            username:email,
            password:password
        })
        .then((response)=>{
            const token = response.data["token"]
            console.log(token);  
            localStorage.setItem("token",token)
        })
        //TODO send request to backend
    }
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>
                    <form className="mx-auto max-w-lg rounded-lg border">
                        <div className="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                                <input name="email" value={email} onChange={(event)=>setEmail(event.target.value)} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                                <input name="password" value={password} onChange={(event)=>setPassword(event.target.value)} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>
                            <button onClick={handlerButtonOnClick} className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login