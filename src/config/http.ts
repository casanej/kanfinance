import { AxiosRequestConfig } from 'axios';
import { Axios } from './axios';

const server = new Axios({
    baseURL: process.env.API_URL
});

server.useInterceptor((config: AxiosRequestConfig<any>) => {
    const token = '1';

    if (config.headers) {
        config.headers.Authorization = token;
    }

    return config;
});

export { server };