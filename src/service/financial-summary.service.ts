import { server } from 'config'

export class FinancialSummaryService {
    async getTransactions() {
        return await server.get('/web/v1/transactions')
    }
}

export const financialSummaryService = new FinancialSummaryService();