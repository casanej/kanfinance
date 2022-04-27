import React, { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from 'structure';
import { DashboardPage } from './app';
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
            <Route path='app' element={<ProtectedRoutes />}>
                <Route path='dashboard' element={<DashboardPage /> } />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </>;
};
