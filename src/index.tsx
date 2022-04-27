/* eslint-disable no-prototype-builtins */
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app'

const container = document.getElementById('root');
const root = createRoot(container!);

const firebaseConfig = {
    apiKey: 'AIzaSyCoty_oTrSYkWEZbISlvrYKhKDiahiHyUM',
    authDomain: 'kanfinance-casanje.firebaseapp.com',
    projectId: 'kanfinance-casanje',
    storageBucket: 'kanfinance-casanje.appspot.com',
    messagingSenderId: '1092914904384',
    appId: '1:1092914904384:web:1a2c8345c72ef7dd11cea5',
    measurementId: 'G-43L4LK71WM'
};

const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);

root.render(<React.StrictMode><App /></React.StrictMode>);