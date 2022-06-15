import { Typography } from '@mui/material';
import { StatementItem } from 'components';
import React, { FC } from 'react'

export const DailySchedule:FC = () => {
    return <>
        <Typography fontWeight={900} variant='h5' color='#7E57C2'>Agenda do dia</Typography>
        <div>
            <StatementItem variant='brief' value={1800} greatness='positive'>Descrição de item 1</StatementItem>
            <StatementItem variant='brief' value={1200} greatness='negative'>Descrição de item 2</StatementItem>
            <StatementItem variant='brief' value={800} greatness='negative'>Descrição de item 3</StatementItem>
        </div>
    </>;
};
