import { Divider, Grid, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { NavMenuDrawer } from 'structure';
import { DailySchedule } from '../calendars';

export const AppInternPages = () => {
    React.useEffect(() => {
        console.log('RE-RENDER')
    }, [])

    return <NavMenuDrawer>
        <Stack spacing={2} marginBottom={2}>
            <Grid container direction='row' justifyContent='space-between'>
                <Typography variant='h4' fontWeight='500'>Atividade Financeira</Typography>
                <Grid item xs={6} alignItems='flex-end'>
                    <DailySchedule />
                </Grid>
            </Grid>
            <Divider />
        </Stack>
        <Outlet />
    </NavMenuDrawer>;
}
