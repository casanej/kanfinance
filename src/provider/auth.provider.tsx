/* eslint-disable no-console */
/* eslint-disable no-empty-function */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/useToast';

interface Props {
    children: React.ReactNode;
}

interface AuthProviderProps {
    isLoggedIn: boolean;
    firstRender: boolean;
    onLogIn: (username: string, password: string, redirect?: boolean) => void;
    onSignIn: (name: string, username: string, password: string, redirect?: boolean) => void;
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

    const handleSignIn = (name: string, email: string, password: string, redirect?: boolean) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
                const user = userCredential.user;
                console.log('[USER LOGGED]', user)
                setIsLoggedIn(true);

                await updateProfile(user, {
                    displayName: name
                })
                if(redirect) navigate('/app/dashboard');
            })
            .catch((error) => {
                const { code } = error;

                if (code === 'auth/email-already-in-use') toast('error', 'Email já cadastrado, faça login para continuar ou recupere sua senha.');
                else {
                    toast('error', 'Não foi possível realizar o login. Tente novamente mais tarde.')
                }

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