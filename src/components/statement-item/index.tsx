import React, { FC } from 'react'
import { numberToMoney } from 'utils';
import { StatementItemStyled, StatementItemTitle, StatementItemValue, StatementValueGreatness } from './index.style';

interface Props {
    value: number;
    greatness?: StatementValueGreatness;
    variant?: 'detailed' | 'summary';
}

export const StatementItem:FC<Props> = (props) => {

    if (props.variant === 'detailed') return <StatementItemStyled orientation='column'>
        <StatementItemTitle>{props.children}</StatementItemTitle>
        <StatementItemValue greatness={props.greatness || 'neutral'}>
            {numberToMoney(props.value)}
        </StatementItemValue>
    </StatementItemStyled>

    return <div>StatementItem</div>;
};
