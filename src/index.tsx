/* eslint-disable no-prototype-builtins */
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app'

const container = document.getElementById('root');
const root = createRoot(container!);

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);

root.render(<React.StrictMode><App /></React.StrictMode>);