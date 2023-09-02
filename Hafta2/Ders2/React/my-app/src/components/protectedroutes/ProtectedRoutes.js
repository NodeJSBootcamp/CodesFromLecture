import { Link, Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = (
{   redirectRoute,
    scope,
    child
}) =>{
    //TODO scope controll
    if(!scope){
        return <Navigate to={redirectRoute} replace/>
    }

    return child ? child : <Outlet/>
}

export default ProtectedRoutes;