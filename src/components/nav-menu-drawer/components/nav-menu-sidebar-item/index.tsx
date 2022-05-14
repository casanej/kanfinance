import React, { FC } from 'react'
import { ListItem } from 'components';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Inbox as InboxIcon } from '@mui/icons-material';

interface Props {
    isOpen: boolean;
    label: React.ReactNode;
}

export const NavMenuSidebarItem:FC<Props> = (props) => {

    return <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={{ minHeight: 48, justifyContent: props.isOpen ? 'initial' : 'center', px: 2.5, }} >
            <ListItemIcon sx={{ minWidth: 0, mr: props.isOpen ? 3 : 'auto', justifyContent: 'center', }} >
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={props.label} sx={{ opacity: props.isOpen ? 1 : 0 }} />
        </ListItemButton>
    </ListItem>;
};
