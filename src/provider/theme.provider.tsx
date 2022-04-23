import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { customMuiTheme, GlobalStyle, PalletModel, PalletsType, theme } from 'assets';
import React, { createContext, FC, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const themeContextValues = {};

const ThemeContext = createContext(themeContextValues);

export const CustomThemeContext:FC = (props) => {
    const [currentPallet, setCurrentPallet] = useState<PalletModel>(theme.pallet.dark);

    const changePallet = (pallet: PalletsType) => {
        const palletSwitch = () => {
            setCurrentPallet(theme.getTheme(pallet));
        }

        palletSwitch();
    }

    const themeObj = useMemo(() => ({ ...theme, currentPallet, changePallet }), [currentPallet, changePallet]);

    return <ThemeContext.Provider value={themeContextValues}>
        <ThemeProvider theme={themeObj}>
            <GlobalStyle theme={themeObj} />
            <MuiThemeProvider theme={customMuiTheme}>
                {props.children}
            </MuiThemeProvider>
        </ThemeProvider>
    </ThemeContext.Provider>
};
