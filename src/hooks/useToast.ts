import { toast, ToastOptions } from 'react-toastify'

export type ToastTypes = 'success' | 'error' | 'info' | 'warning';

export const useToast = () => {
    const toastOption: ToastOptions = {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'colored'
    }

    const showToast = (type: ToastTypes, message: string) => {

        switch (type) {
        case 'success': toast.success(message, toastOption); break;
        case 'error': toast.error(message, toastOption); break;
        case 'info': toast.info(message, toastOption); break;
        case 'warning': toast.warning(message, toastOption); break;
        default: toast(message, toastOption); break;
        }
    }

    return showToast
}
