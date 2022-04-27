import { Typography } from '@mui/material';
import { Container } from 'components';
import React, { FC } from 'react'
import { LoginContent, RegisterStyled } from './index.style';

import { ReactComponent as RegisterPlaceholder } from 'assets/images/register-placeholder.svg'
import { RegisterForm } from 'structure';

export const RegisterPage:FC = () => {
    return <Container fullHeight size='lg'>
        <RegisterStyled>
            <LoginContent>
                <Typography variant='h5'>Seja bem vindo</Typography>
                {/* <Typography variant='h6'>Crie sua conta usando</Typography>
                <div>
                    <Button variant='contained'>G</Button>
                    <Button variant='contained'>F</Button>
                </div> */}

                {/* <Typography variant='inherit'>ou preencha os campos abaixo para criar sua conta</Typography> */}
                <Typography variant='inherit'>preencha os campos abaixo para criar sua conta</Typography>

                <RegisterForm />
            </LoginContent>
            <RegisterPlaceholder />
        </RegisterStyled>
    </Container>;
};
