import React from 'react';
import { Navigate, Route,useLocation,Outlet } from 'react-router-dom';

const PrivateRoutes = (component) => {
    var session_token=localStorage.getItem("email");

    let location = useLocation();
    var isAuthenticated = false;
    if (session_token=="admin@email.com"){
        isAuthenticated=true;
        return <Outlet />;
    }
    return (
         <Navigate to="/" state={{ from: location }} />
    )
}

export default PrivateRoutes