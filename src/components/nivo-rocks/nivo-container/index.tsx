import React, { FC } from 'react'
import { NivoContainerStyled } from './index.style';

interface Props {
    height?: string | number;
}

export const NivoContainer:FC<Props> = (props) => {

    return <NivoContainerStyled height={props.height || '50vh'}>{props.children}</NivoContainerStyled>;
};
