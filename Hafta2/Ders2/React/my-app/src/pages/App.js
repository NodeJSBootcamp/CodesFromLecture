import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import MainLayout from "../layout/mainlayout/mainlayout";
import Home from "./home/Home";
import User from "./client/user/User";
import Dashboard from "./admin/Dashboard"
import ProtectedRoutes from "../components/protectedroutes/ProtectedRoutes";
import Login from "./home/login/Login";

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"client",
        children:[
          {
            index:true,
            element:<User/>
          }
        ]
      },
      {
        path:"admin",
        children:[
          {
            index:true,
            element:<ProtectedRoutes child={<Dashboard/>} redirectRoute="/" scope={true}/>
          }
        ]
      }
    ]
  }
])
 
const App = () => {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
