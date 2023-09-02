import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import React from "react";
const MainLayout = () =>{
    return(
        <React.Fragment className="h-screen">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default MainLayout;