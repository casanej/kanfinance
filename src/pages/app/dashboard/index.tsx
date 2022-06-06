import { Divider, Grid, Stack, Typography } from '@mui/material';
import { Box, NivoChartLine, NivoPieChart } from 'components';
import React, { FC } from 'react'
import { DailySchedule } from 'structure';
import { lineData, pieChartMock } from 'utils';

export const DashboardPage:FC = () => {
    return <>
        <Stack spacing={2} marginBottom={2}>
            <Grid container direction='row' justifyContent='space-between'>
                <Typography variant='h4' fontWeight='500'>Atividade Financeira</Typography>
                <Grid item xs={6} alignItems='flex-end'>
                    <DailySchedule />
                </Grid>
            </Grid>
            <Divider />
        </Stack>
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
