import { GlobalState } from './global';

export const globalState = new GlobalState()

export const useGlobalState = () => {
    return globalState
}