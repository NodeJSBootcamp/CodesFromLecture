import { Link, Navigate, Outlet } from "react-router-dom";
import store from "../../store/redux_store";
import { useSelector } from "react-redux"

const ProtectedRoutes = (
{   redirectRoute,
    scope,
    child
}) =>{
    const isAuth = useSelector(state=>state.auth.isAuthenticated)
    //TODO scope controll
    const generalState = store.getState()
    const authState = generalState["auth"]
    console.log(authState);
    if(!isAuth){
        return <Navigate to={redirectRoute} replace/>
    }

    return child ? child : <Outlet/>
}

export default ProtectedRoutes;