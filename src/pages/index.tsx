import React, { ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom';
import { AppInternPages } from 'structure';
import { DashboardPage } from './app';
import { TransactionsPage } from './app/transactions';
import { HomePage } from './home';
import { LoginPage } from './login';
import { LogoutPage } from './logout';
import { NotFoundPage } from './not-found';
import { RegisterPage } from './register';

export const AppPages = (): ReactElement => {
    return <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/logout' element={<LogoutPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='app' element={<AppInternPages />}>
            <Route path='dashboard' element={<DashboardPage /> } />
            <Route path='transactions' element={<TransactionsPage /> } />
            <Route path='*' element={<NotFoundPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
    </Routes>;
};
