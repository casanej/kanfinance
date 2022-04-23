import { getAuth, signOut } from 'firebase/auth';
import React, { FC, useEffect } from 'react'

export const LogoutPage:FC = () => {
    const auth = getAuth();

    useEffect(() => {
        handleLogout();
    }, []);

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('[LOGOUT SUCCESS]', auth);
        }).catch((error) => {
            console.log('[ERROR]', error);
        });
    }
    return <div>LogoutPage</div>;
};
