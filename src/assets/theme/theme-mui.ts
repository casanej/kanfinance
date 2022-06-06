import { createTheme, PaletteColorOptions, ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
    interface CustomPalette {
        white100: PaletteColorOptions;
    }
    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        white100: true;
    }

    interface ButtonPropsSizeOverrides {
        xSmall: true;
    }
}

const muiOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        white100: { main: '#ffffff1a' }
    },
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
            variants: [
                {
                    props: { size: 'xSmall' },
                    style: {
                        minWidth: '40px',
                        padding: '10px',
                    }
                },
                {
                    props: { color: 'white100' },
                    style: {
                        '&:hover': {
                            background: '#6E35DE80',
                        }
                    }
                }
            ]
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#999999',
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#6E35DE'
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
                },
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
};

export const customMuiTheme = createTheme(muiOptions);