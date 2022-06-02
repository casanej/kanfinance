import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { NavMenuDrawer } from 'structure';

export const AppInternPages = () => {
    return <NavMenuDrawer>
        <Outlet />
    </NavMenuDrawer>;
}
