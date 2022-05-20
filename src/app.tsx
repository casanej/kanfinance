import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AppPages } from './pages';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeContext } from './provider';
import { AuthProvider } from 'provider';

const App = () => {
    const queryClient = new QueryClient();

    return <CustomThemeContext>
        <AuthProvider>
            <BrowserRouter>
                <ToastContainer style={{ width: 'fit-content', maxWidth: '1280px' }} />
                <QueryClientProvider client={queryClient}>
                    <AppPages />
                </QueryClientProvider>
            </BrowserRouter>
        </AuthProvider>
    </CustomThemeContext>
};

export default App;