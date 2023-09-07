"use client"
import withAuth from "@/helpers/withAuth.hook"

const Admin = () =>{
    return (
        <h1 className="text-black">
            Admin page
        </h1>
    )
}


export default withAuth(Admin)