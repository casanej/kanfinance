import { StyledEngineProvider, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { customMuiTheme, GlobalStyle, PalletModel, PalletsType, theme } from 'assets';
import React, { FC, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

export const CustomThemeContext:FC = (props) => {
    const [currentPallet, setCurrentPallet] = useState<PalletModel>(theme.pallet.dark);

    const changePallet = (pallet: PalletsType) => {
        const palletSwitch = () => {
            setCurrentPallet(theme.getTheme(pallet));
        }

        palletSwitch();
    }

    const themeObj = useMemo(() => ({ ...theme, currentPallet, changePallet }), [currentPallet, changePallet]);

    return <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={customMuiTheme}>
            <ThemeProvider theme={themeObj}>
                <GlobalStyle theme={themeObj} />
                {props.children}
            </ThemeProvider>
        </MuiThemeProvider>

    </StyledEngineProvider>
};
