import styled from 'styled-components';

export type ContainerSizeType = keyof typeof CONTAINER_SIZE

const CONTAINER_SIZE = {
    sm: 600,
    md: 900,
    lg: 1280,
    xl: 1920,
}

export const ContainerStyled = styled.div<{ fullHeight?: boolean; size: ContainerSizeType }>`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100vw;
    max-width: ${props => CONTAINER_SIZE[props.size]}px;
    height: ${props => props.fullHeight ? '100vh' : 'auto'};
    overflow-y: hidden;
    margin: 0 auto;
`;