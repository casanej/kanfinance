import { Typography } from '@mui/material';
import styled, { css } from 'styled-components';

export type StatementValueGreatness = 'positive' | 'negative' | 'neutral';

export const StatementItemStyled = styled.div<{ orientation: 'column' | 'row' }>`
    display: flex;
    flex-direction: ${props => props.orientation};
    ${props => props.orientation === 'row'
        ? css`
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
        `
        : css`
            align-items: flex-start;
            justify-content: flex-start;
        `}
`;

export const StatementItemTitle = styled.div`
    font-weight: 100;
    font-size: 1rem;
    line-height: 27px;
`;

export const StatementItemValue = styled(Typography)<{ greatness: StatementValueGreatness }>`
    color: ${props => {
        switch (props.greatness) {
        case 'positive':
            return '#21D312';
        case 'negative':
            return '#E12E1F';
        case 'neutral':
            return '#6E35DE';
        }
    }};
`;