import React, { FC } from 'react'
import { ListItem as MuiListItem, ListItemProps as MuiListItemProps, styled } from '@mui/material'

interface ListItemProps extends MuiListItemProps {
    active?: boolean;
}

const ListItemStyled = styled(MuiListItem)<ListItemProps>(({ active }) => ({
    '&:hover': {
        background: 'linear-gradient(90deg, #6E35DE 2.54%, #DB17CD 100%)',
        '& .MuiListItemIcon-root': {
            color: '#fff'
        }
    },
    ...active && {
        background: 'linear-gradient(90deg, #6E35DE 2.54%, #DB17CD 100%)',
        '& .MuiListItemIcon-root': {
            color: '#fff'
        }
    },
}))

export const ListItem:FC<ListItemProps> = (props) => {
    return <ListItemStyled {...props}>{props.children}</ListItemStyled>
}