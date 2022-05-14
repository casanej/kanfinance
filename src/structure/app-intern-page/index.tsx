import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { NavMenuDrawer } from 'components';

export const AppInternPages = () => {
    return <NavMenuDrawer>
        <Outlet />
    </NavMenuDrawer>;
}
