/* eslint-disable no-console */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelTokenSource } from 'axios';

export class Axios {
    private instance: AxiosInstance;

    private cancelTokenSources: CancelTokenSource[] = [];

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
    }

    private addToBag() {
        const axiosCancelTokenSource = axios.CancelToken.source();

        this.cancelTokenSources.push(axiosCancelTokenSource);

        return axiosCancelTokenSource.token;
    }

    private handleErrors(error: any) {
        return Promise.reject({ message: error.message, response: error.response });
    }

    private handleRequest(promise: Promise<AxiosResponse>) {
        return promise
            .then(res => {
                const { data } = res;
                if (data.error || data.error_message) {
                    const error = data.error || data.error_message;
                    return Promise.reject(new Error(error));
                }

                return Promise.resolve(data);
            })
            .catch(this.handleErrors.bind(this));
    }

    private mapRequestOptions(options: AxiosRequestConfig) {
        return options;
    }

    useInterceptor(interceptor: (value: AxiosRequestConfig<any>) => AxiosRequestConfig<any>) {
        return this.instance.interceptors.request.use(interceptor, error => {
            console.error('[Axios] error', error);
            return Promise.reject(error);
        });
    }

    get(url: string, options: AxiosRequestConfig = {}) {
        return this.handleRequest(
            this.instance.get(
                url,
                {
                    ...options,
                    headers: {
                        accept: 'application/json',
                        ...options.headers
                    },
                    cancelToken: this.addToBag()
                }
            )
        );
    }
}