import { useAuthProvider } from 'provider';
import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoutes:FC = () => {
    const { firstRender, isLoggedIn } = useAuthProvider();

    if (firstRender) return null;
    if (!isLoggedIn) return <Navigate to='/login' />;

    return <div>
        ProtectedRoutes
        <Outlet />
    </div>;
};
