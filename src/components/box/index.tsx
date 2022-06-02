import React, { FC } from 'react'
import { BoxDescription, BoxStyled, BoxTitle } from './index.style';

interface Props {
    description?: React.ReactNode;
    title?: React.ReactNode;
}

export const Box:FC<Props> = (props) => {

    return <BoxStyled>
        { props.title && <BoxTitle>{props.title}</BoxTitle> }
        { props.description && <BoxDescription>{props.description}</BoxDescription> }
        { props.children }
    </BoxStyled>;
};
