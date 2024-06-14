import React, { useContext } from 'react';
import {  Outlet, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/auth/authContext.jsx';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const  isAuthenticated  = AuthProvider();
    console.log('is authenticated', isAuthenticated);
    return isAuthenticated ? <Outlet/> : <Navigate to="/signin" />;
};

export default ProtectedRoute;