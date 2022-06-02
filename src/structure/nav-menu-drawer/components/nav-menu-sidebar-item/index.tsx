import React, { FC } from 'react'
import { ListItem } from 'components';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { NavLink } from 'react-router-dom';

interface Props {
    isOpen: boolean;
    icon: IconName;
    href: string;
    label: React.ReactNode;
}

export const NavMenuSidebarItem:FC<Props> = (props) => {

    console.log('[props]', props);

    return <NavLink to={props.href}>
        <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: props.isOpen ? 'initial' : 'center', px: 2.5, }} >
                <ListItemIcon sx={{ minWidth: 0, mr: props.isOpen ? 3 : 'auto', justifyContent: 'center', }} >
                    <FontAwesomeIcon icon={props.icon} size='lg' />
                </ListItemIcon>
                <ListItemText primary={props.label} sx={{ opacity: props.isOpen ? 1 : 0 }} />
            </ListItemButton>
        </ListItem>
    </NavLink>;
};
