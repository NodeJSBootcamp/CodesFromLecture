import Navbar from "../navbar/navbar";
import React from "react";
const CustomLayout = ({
    children,
  }: {
    children: React.ReactNode
  })  =>{

    return(
        <main>
            <Navbar style="mb-10"/>
            {children}
        </main>
    )

}

export default CustomLayout;