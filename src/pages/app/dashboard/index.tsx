import { Divider, Grid, Stack, Typography } from '@mui/material';
import { Box, NivoChartLine, NivoPieChart } from 'components';
import React, { FC } from 'react'
import { lineData, pieChartMock } from 'utils';

export const DashboardPage:FC = () => {
    return <>
        <Stack spacing={2}>
            <Grid container>
                <Stack direction='row' sx={{ alignContent: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <Typography variant='h4' fontWeight='500'>Atividade Financeira</Typography>

                    <div>Atividade de hoje</div>
                </Stack>
            </Grid>
            <Divider />
            <Box title='Resumo Financeiro'>
                <NivoChartLine data={lineData} />
            </Box>
        </Stack>;
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box title='Gastos por categoria' description='Seus gastos estão sendo maiores em “categoria 1”'>
                    <NivoPieChart data={pieChartMock} />
                </Box>
            </Grid>
        </Grid>
    </>
};
