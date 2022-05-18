import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import React, { FC } from 'react'
import { NavMenuTopBarButtonsStyled } from './index.style';

export const NavMenuTopBarButtons:FC = () => {

    return <NavMenuTopBarButtonsStyled>
        <Button variant='contained' color='white100' size='xSmall'> <FontAwesomeIcon icon='moon' /> </Button>
        <Button variant='contained' color='white100' size='xSmall'> <FontAwesomeIcon icon='bell' /> </Button>
        <Button variant='contained' color='white100' size='xSmall'> <FontAwesomeIcon icon='building-columns' /> </Button>
        <Button variant='contained' color='white100' size='xSmall'> <FontAwesomeIcon icon='comments' /> </Button>
        <Button variant='contained' color='white100' size='xSmall'> <FontAwesomeIcon icon='rotate' /> </Button>
        <Button variant='contained' color='white100' size='xSmall'> <FontAwesomeIcon icon='cog' /> </Button>
    </NavMenuTopBarButtonsStyled>;
};
