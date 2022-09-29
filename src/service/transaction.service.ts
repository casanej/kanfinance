import { server } from 'config'

export class TransactionService {
    async getTransactions() {
        return await server.get('/web/v1/transactions')
    }
}

export const transactionsService = new TransactionService();