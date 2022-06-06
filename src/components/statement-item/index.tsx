import { Typography } from '@mui/material';
import React, { FC } from 'react'
import { numberToMoney } from 'utils';
import { StatementItemStyled, StatementItemTitle, StatementItemValue, StatementValueGreatness } from './index.style';

interface Props {
    value: number;
    greatness?: StatementValueGreatness;
    variant?: 'detailed' | 'brief' | 'summary';
}

export const StatementItem:FC<Props> = (props) => {

    if (props.variant === 'detailed') return <StatementItemStyled orientation='column'>
        <StatementItemTitle>{props.children}</StatementItemTitle>
        <StatementItemValue variant='h5' fontWeight={900} greatness={props.greatness || 'neutral'}>
            {numberToMoney(props.value)}
        </StatementItemValue>
    </StatementItemStyled>

    if (props.variant === 'brief') return <StatementItemStyled orientation='row'>
        <Typography>{props.children}</Typography>
        <StatementItemValue greatness={props.greatness || 'neutral'}>
            {numberToMoney(props.value)}
        </StatementItemValue>
    </StatementItemStyled>

    return <div>StatementItem</div>;
};
