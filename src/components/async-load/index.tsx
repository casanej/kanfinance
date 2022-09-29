/* eslint-disable react/prop-types */
import React from 'react';
import { Async, AsyncOptions } from 'react-async';

import { isFunction } from 'lodash';
import { SpinnerLoader } from 'components';

interface Props extends AsyncOptions<any> {
    children?: React.ReactNode;
}

export const AsyncLoad = (props: Props) => {
    return <Async {...props}>
        <Async.Pending>
            <SpinnerLoader />
        </Async.Pending>
        <Async.Fulfilled>
            {response => isFunction(props.children) ? props.children(response) : props.children}
        </Async.Fulfilled>
        <Async.Rejected>
            {error => isFunction(props.children) ? props.children(error) : props.children}
        </Async.Rejected>
    </Async>;
}

