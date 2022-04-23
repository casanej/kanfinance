import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { PalletModel, PalletsType, darkTheme, lightTheme, ThemePatternPallet, colors } from './pallets';

export * from './pallets'
export * from './theme-mui'

declare module 'styled-components' {
    export interface DefaultTheme {
        currentPallet: PalletModel;
        colors: typeof colors
        pallet: ThemePatternPallet;
        getTheme: (pallet: PalletsType) => PalletModel;
        changePallet?: (pallet: PalletsType) => void;
    }
}

interface GlobalStyleProps {
    readonly theme: PalletModel;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`

    * {
        margin: 0;
        padding: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    html, body {
        height: 100%;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme.currentPallet.background.primary};
        color: ${props => props.theme.currentPallet.text.primary};
        font-family: sans-serif;
        font-size: 14px;
        width: 100vw;
        height: 100vh;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        position: relative;
        justify-content: flex-start;
        align-items: flex-start;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }
`

export const theme = {
    currentPallet: darkTheme,
    colors,
    pallet: {
        light: lightTheme,
        dark: darkTheme
    },
    getTheme: (pallet: PalletsType) => {
        return theme.pallet[pallet];
    }
} as DefaultTheme