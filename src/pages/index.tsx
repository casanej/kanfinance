import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './home';
import { LoginPage } from './login';
import { LogoutPage } from './logout';
import { NotFoundPage } from './not-found';

export const AppPages = (): ReactElement => {
    return <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </>;
};
