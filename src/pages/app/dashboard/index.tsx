import React, { FC } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export const DashboardPage:FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/logout');
    }

    return <div>
        DashboardPage
        <NavLink to='/app/transactions'>Transactions</NavLink>
        <button onClick={handleLogout}>Logout</button>
    </div>;
};
