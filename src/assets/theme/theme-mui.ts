import { createTheme, ThemeOptions } from '@mui/material';

const muiOptions: ThemeOptions = {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                    padding: 10
                },
                text: {
                    color: '#e55f91'
                }
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#fff'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: '#fff',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#fff'
                }
            }
        }
    },
    palette: {
        primary: {
            main: '#6E35DE',
        },
        text: {
            primary: '#fff'
        },
    },
};

export const customMuiTheme = createTheme(muiOptions);