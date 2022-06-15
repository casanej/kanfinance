import { Grid, Stack, Typography } from '@mui/material';
import { StatementItem } from 'components';
import React, { FC } from 'react'

export const WeeklySchedule:FC = () => {

    return <Grid container spacing={2} alignContent={'center'}>
        <Grid item xs={6}>
            <Stack gap={5} >
                <div>
                    <Typography variant='h4'>Agenda da semana</Typography>
                    <Typography variant='subtitle1'>Esta área está vinculada a sua agenda</Typography>
                </div>
                <div>
                    <Typography fontWeight={900} color='#6E35DE' >Segunda feira, 06 de junho</Typography>
                    <Typography fontWeight={900} color='#6E35DE' >Segunda feira, 13 de junho</Typography>
                </div>
            </Stack>
        </Grid>
        <Grid item xs={6}>
            <StatementItem variant='brief' value={1800} greatness='positive'>Descrição de item 1</StatementItem>
            <StatementItem variant='brief' value={1200} greatness='negative'>Descrição de item 2</StatementItem>
            <StatementItem variant='brief' value={800} greatness='negative'>Descrição de item 3</StatementItem>
        </Grid>
    </Grid>
};
