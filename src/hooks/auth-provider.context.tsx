/* eslint-disable no-console */
/* eslint-disable no-empty-function */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from './useToast';

interface Props {
    children: React.ReactNode;
}

interface AuthProviderProps {
    isLoggedIn: boolean;
    firstRender: boolean;
    onLogIn: (username: string, password: string, redirect?: boolean) => void;
    onSignIn: (username: string, password: string) => void;
    onLogOut: () => void;
}

const AuthProviderContext = createContext<AuthProviderProps>({
    isLoggedIn: false,
    firstRender: true,
    onLogIn: () => {},
    onSignIn: () => {},
    onLogOut: () => {},
});

export const useAuthProvider = () => useContext(AuthProviderContext);

export const AuthProviderProvider = (props: Props) => {
    const navigate = useNavigate();
    const toast = useToast();
    const auth = getAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [firstRender, setFirstRender] = useState(true);

    onAuthStateChanged(auth, (user) => {
        // console.log('[CURRENT USER]', user);

        if (user) {
            setIsLoggedIn(true);
        }

        if (firstRender) setFirstRender(false);
    });

    const handleLogin = (email: string, password: string, redirect?: boolean) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((_) => {
                // Signed in
                setIsLoggedIn(true);

                if(redirect) navigate('/app/dashboard');
            })
            .catch((error) => {
                const { code } = error;
                if (code === 'auth/wrong-password' || code === 'auth/user-not-found') toast('error', 'Login ou senha incorretos.');
                else {
                    toast('error', 'Não foi possível realizar o login. Tente novamente mais tarde.')
                }

                console.warn('[handleLogin-Warn]', {error});
            });
    }

    const handleSignIn = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
                const user = userCredential.user;
                console.log('[USER LOGGED]', user)
                setIsLoggedIn(true);
            })
            .catch((error) => {
                const { code } = error;

                toast('error', 'Não foi possível realizar o login. Tente novamente mais tarde.')

                console.log('[SIGN IN ERROR]', {error}, code)
            });
    }

    const handleSignOut = async() => {
        await signOut(auth);
        navigate('/');
        setIsLoggedIn(false);
    }

    return <AuthProviderContext.Provider value={{
        isLoggedIn: isLoggedIn,
        firstRender: firstRender,
        onLogIn: handleLogin,
        onSignIn: handleSignIn,
        onLogOut: handleSignOut,
    }}>{props.children}</AuthProviderContext.Provider>;
};