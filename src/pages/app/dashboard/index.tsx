import { Grid } from '@mui/material';
import { Box, NivoChartLine, NivoPieChart } from 'components';
import React, { FC } from 'react'
import { lineData, pieChartMock } from 'utils';

export const DashboardPage:FC = () => {
    return <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box title='Resumo Financeiro'>
                    <NivoChartLine data={lineData} />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box title='Gastos por categoria' description='Seus gastos estão sendo maiores em “categoria 1”'>
                    <NivoPieChart data={pieChartMock} />
                </Box>
            </Grid>
        </Grid>
    </>
};
