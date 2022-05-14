import { createTheme, ThemeOptions } from '@mui/material';

const muiOptions: ThemeOptions = {
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#111014',
                }
            }
        },
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
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#6E35DE'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#fff'
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: '#6E35DE',
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000000',
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