import React, { FC, useCallback, useEffect } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { transactionsDataGrid } from 'utils';
import { AsyncLoad, Box } from 'components';
import { Grid } from '@mui/material';
import { WeeklySchedule } from 'structure';
import { transactionsService } from 'service';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'bank',
        headerName: 'Banco',
        width: 300,
    },
    {
        field: 'details',
        headerName: 'Detalhes',
        width: 300,
    },
    {
        field: 'createdDate',
        headerName: 'Data de criação',
        width: 300,
        valueGetter: (params: GridValueGetterParams) => {
            console.log('[VALUE]', params)
            return new Intl.DateTimeFormat('pt-BR').format(new Date(params.value));
        }
    },
    {
        field: 'category',
        headerName: 'Categoria',
        width: 300,
        valueGetter: (params: GridValueGetterParams) => {
            if (params.value) return params.value.name;

            return null;
        }
    },
    {
        field: 'paymentType',
        headerName: 'Tipo de Pagamento',
        width: 300,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 300,
    },
    {
        field: 'value',
        headerName: 'Valor',
        width: 300,
        valueGetter: (params: GridValueGetterParams) => {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', }).format(params.value);
        }
    },
];

export const TransactionsPage:FC = () => {

    /* useEffect(() => {
        transactionsService.getTransactions();
    }, []) */

    const promiseHandleGetTransactions = useCallback(async() => {
        const transactions = await transactionsService.getTransactions()
        return transactions;
    }, [])

    return <div>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box title='Resumo financeiro - Maio/2022'>
                    <div style={{ height: 130 + 52 * 6, width: '100%' }}>
                        <AsyncLoad promiseFn={promiseHandleGetTransactions}>
                            {(transactions: any) => {
                                console.log('[transactions]', transactions);
                                return <DataGrid
                                    rows={transactions.data}
                                    columns={columns}
                                    pageSize={6}
                                    rowsPerPageOptions={[5]}
                                />
                            }}
                        </AsyncLoad>
                    </div>
                </Box>
            </Grid>

            <Grid item xs={6}>
                <WeeklySchedule />
            </Grid>
        </Grid>
    </div>;
};
