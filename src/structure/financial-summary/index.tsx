import { StatementItem } from 'components';
import React, { FC } from 'react'
import { FinancialSummaryStyled } from './index.style';

export const FinancialSummary:FC = () => {

    return <FinancialSummaryStyled>
        <StatementItem variant='detailed' value={0} greatness='neutral' >Total movimentado</StatementItem>
        <StatementItem variant='detailed' value={0} greatness='positive' >Saldo disponível</StatementItem>
        <StatementItem variant='detailed' value={0} greatness='negative' >Gastos</StatementItem>
    </FinancialSummaryStyled>;
};
