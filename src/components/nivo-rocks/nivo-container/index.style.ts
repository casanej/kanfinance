import styled from 'styled-components';

export const NivoContainerStyled = styled.div<{ height: string | number; }>`
    height: ${props => props.height};
`;