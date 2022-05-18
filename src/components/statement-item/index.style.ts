import styled from 'styled-components';

export type StatementValueGreatness = 'positive' | 'negative' | 'neutral';

export const StatementItemStyled = styled.div<{ orientation: 'column' | 'row' }>`
    display: flex;
    flex-direction: ${props => props.orientation};
    align-items: flex-start;
    justify-content: flex-start;
`;

export const StatementItemTitle = styled.div`
    font-weight: 100;
    font-size: 1rem;
    line-height: 27px;
`;

export const StatementItemValue = styled.div<{ greatness: StatementValueGreatness }>`
    font-weight: 900;
    font-size: 1.4rem;
    line-height: 32px;
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