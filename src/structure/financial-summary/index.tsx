import { StatementItem } from 'components';
import { observer } from 'mobx-react';
import React, { FC } from 'react'
import { useGlobalState } from 'state';
import { FinancialSummaryStyled } from './index.style';

export const FinancialSummary:FC = observer(() => {
    const global = useGlobalState();

    global.financialSummary.available = 10;

    return <FinancialSummaryStyled>
        <StatementItem variant='detailed' value={global.financialSummary.total} greatness='neutral' >Total movimentado</StatementItem>
        <StatementItem variant='detailed' value={global.financialSummary.available} greatness='positive' >Saldo disponível</StatementItem>
        <StatementItem variant='detailed' value={global.financialSummary.spending} greatness='negative' >Gastos</StatementItem>
    </FinancialSummaryStyled>;
});
