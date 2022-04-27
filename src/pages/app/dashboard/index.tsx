import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';

export const DashboardPage:FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/logout');
    }

    return <div>
        DashboardPage
        <button onClick={handleLogout}>Logout</button>
    </div>;
};
