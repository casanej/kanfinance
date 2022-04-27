import { Button, Typography } from '@mui/material';
import { Container } from 'components';
import React, { FC } from 'react'
import { LoginContent, LoginStyled } from './index.style';

import { ReactComponent as LoginPlaceholder } from 'assets/images/login-placeholder.svg'
import { LoginForm } from 'structure';

export const LoginPage:FC = () => {
    return <Container fullHeight size='lg'>
        <LoginStyled>
            <LoginPlaceholder />
            <LoginContent>
                <Typography variant='h4'>Seja bem vindo</Typography>
                <Typography variant='h6'>faça login em sua conta</Typography>
                {/* <div>
                    <Button variant='contained'>G</Button>
                    <Button variant='contained'>F</Button>
                </div> */}

                <Typography variant='inherit'>ou digite suas credenciais</Typography>

                <LoginForm />

                <Button fullWidth variant='text' href='/forgot-password' >Esqueceu a senha ?</Button>
                <Button fullWidth variant='contained' href='/register'>Novo por aqui ? Crie sua conta</Button>
            </LoginContent>
        </LoginStyled>
    </Container>;
};
