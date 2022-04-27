import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AppPages } from './pages';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeContext } from './provider';
import { AuthProviderProvider } from './hooks';

const App = () => {
    const queryClient = new QueryClient();

    return <CustomThemeContext>
        <BrowserRouter>
            <ToastContainer />
            <QueryClientProvider client={queryClient}>
                <AuthProviderProvider>
                    <AppPages />
                </AuthProviderProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </CustomThemeContext>
};

export default App;