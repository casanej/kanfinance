import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { FC } from 'react'

interface Props { }

export const Register:FC<Props> = (props) => {
    const auth = getAuth();

    const handleSignIn = async() => {
        try {
            const user = await createUserWithEmailAndPassword(auth, 'rafael.casanje@gmail.com', 'R@f@el2010kanfincance');

            console.log('[USER]', user);
        } catch (error: any) {
            console.log('[ERROR]', error?.code, error?.message);
        }
    }

    const handleLogIn = async() => {
        try {
            const user = await signInWithEmailAndPassword(auth, 'rafael.casanje@gmail.com', 'R@f@el2010kanfincance');

            console.log('[USER]', user);
        } catch (error: any) {
            console.log('[ERROR]', error?.code, error?.message);
        }
    }

    return (
        <div>
            <div>LoginPage</div>
            <button onClick={handleSignIn}>Create Test User</button>
            <button onClick={handleLogIn}>Login Test User</button>
        </div>
    );
};
