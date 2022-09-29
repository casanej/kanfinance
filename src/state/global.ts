import { makeAutoObservable } from 'mobx'

export class GlobalState {
    public financialSummary = {
        total: 0,
        available: 0,
        spending: 0,
    }

    constructor() {
        makeAutoObservable(this)
    }
}