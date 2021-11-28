import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoutes = (component) => {
    var session_token=localStorage.getItem("token");
    var isAuthenticated = false;
    if (session_token!==null){
        isAuthenticated=true;
    }
    return (
         isAuthenticated ? component : <Navigate to="/" />
    )
}

export default PrivateRoutes