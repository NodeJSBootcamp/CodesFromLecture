"use client"
import Login from "@/app/onboard/login/page";
import React from "react";


export default function withAuth<P extends JSX.IntrinsicAttributes>(
    WrappedComponent: React.ComponentType<P>
){
    return (props:React.PropsWithChildren<P>) => {
        //useUser - useSessionContext  => Supabase 
    
        const token = localStorage.getItem("token")
        if(typeof token !== "string"){
            return React.createElement(Login,props)
        }
    
        return React.createElement(WrappedComponent,props)
    }  
}