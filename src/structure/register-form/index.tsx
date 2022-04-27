import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useAuthProvider } from 'provider';
import React, { FC, useMemo } from 'react'
import { registerFormSchema } from './index.schema';
import { LoginFormContent } from './index.style';

interface RegisterFormPayloadData {
    email: string;
    name: string;
    password: string;
}

export const RegisterForm:FC = () => {
    const { onSignIn } = useAuthProvider();

    const handleSignIn = (data: RegisterFormPayloadData, _helper: any) => {
        onSignIn(data.name, data.email, data.password, true);
    }

    const registerFormInitialValue = useMemo(() => ({
        email: '',
        name: '',
        password: ''
    }), []);

    return <Formik initialValues={registerFormInitialValue} onSubmit={handleSignIn} validationSchema={registerFormSchema} validateOnChange={false} validateOnBlur={true}>
        {formikForm => {
            const { setFieldValue } = formikForm;

            return <LoginFormContent>
                <TextField
                    error={Boolean(formikForm.errors.name)}
                    fullWidth
                    helperText={formikForm.errors.name}
                    label='Nome'
                    name='name'
                    onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                    onBlur={() => formikForm.validateField('name')}
                    value={formikForm.values.name}
                    variant='standard'
                />
                <TextField
                    error={Boolean(formikForm.errors.email)}
                    fullWidth
                    helperText={formikForm.errors.email}
                    label='E-mail'
                    name='email'
                    onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                    onBlur={() => formikForm.validateField('email')}
                    value={formikForm.values.email}
                    variant='standard'
                />
                <TextField
                    error={Boolean(formikForm.errors.password)}
                    fullWidth
                    helperText={formikForm.errors.password}
                    label='Senha'
                    name='password'
                    onChange={(e) => setFieldValue(e.target.name, e.target.value)}
                    onBlur={() => formikForm.validateField('password')}
                    type='password'
                    value={formikForm.values.password}
                    variant='standard'
                />
                <Button fullWidth variant='contained' onClick={() => formikForm.handleSubmit()}>Cadastrar</Button>
            </LoginFormContent>
        }}
    </Formik>;
};
