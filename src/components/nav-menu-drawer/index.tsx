import React, { FC } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Box, Toolbar, List, CssBaseline, Typography, Divider, IconButton } from '@mui/material'
import { Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { NavMenuSidebarItem, NavMenuTopBarButtons } from './components';
import { NavMenuTopActions } from './index.style';

const drawerWidth = 320;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        },
        ...!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        },
    }),
);

export const NavMenuDrawer:FC<any> = (props) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position='fixed' open={open}>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleDrawerOpen}
                        edge='start'
                        sx={{ marginRight: 5, ...open && { display: 'none' }, }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <NavMenuTopActions>
                        <Typography variant='h6' noWrap component='div'>
                            Kanfinancial
                        </Typography>
                        <NavMenuTopBarButtons />
                    </NavMenuTopActions>
                </Toolbar>
            </AppBar>
            <Drawer variant='permanent' open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <NavMenuSidebarItem isOpen={open} label='Dashboard' />
                    <NavMenuSidebarItem isOpen={open} label='Transações' />
                    <NavMenuSidebarItem isOpen={open} label='Cartões' />
                    <NavMenuSidebarItem isOpen={open} label='Contas' />
                    <NavMenuSidebarItem isOpen={open} label='Planejamento' />
                    <NavMenuSidebarItem isOpen={open} label='Investimentos' />
                    <NavMenuSidebarItem isOpen={open} label='Relatórios' />
                </List>
                <Divider />
                <List>
                    <NavMenuSidebarItem isOpen={open} label='Configurações' />
                </List>
            </Drawer>
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {props.children}
            </Box>
        </Box>
    );
}
