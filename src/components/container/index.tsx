import React, { FC } from 'react'
import { ContainerSizeType, ContainerStyled } from './index.style';

export interface ContainerProps {
    fullHeight?: boolean;
    size?: ContainerSizeType;
}

export const Container:FC<ContainerProps> = (props) => {

    return <ContainerStyled
        fullHeight={props.fullHeight}
        size={props.size || 'lg'}
    >
        {props.children}
    </ContainerStyled>;
};
