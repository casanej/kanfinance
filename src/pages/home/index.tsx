import React, { FC } from 'react'
import { Link } from 'react-router-dom';

interface Props { }

export const HomePage:FC<Props> = () => {

    return <>
        <div>HomePage</div>
        <Link to='/login'>Redirect to login</Link>
        <Link to='/app/dashboard'>Redirect to app</Link>
    </>;
};
