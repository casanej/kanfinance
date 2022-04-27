import { useAuthProvider } from 'hooks';
import React, { FC, useEffect } from 'react'

export const LogoutPage:FC = () => {
    const { onLogOut } = useAuthProvider();

    useEffect(() => {
        handleLogout();
    }, []);

    const handleLogout = () => {
        onLogOut()
    }
    return <div>LogoutPage</div>;
};
