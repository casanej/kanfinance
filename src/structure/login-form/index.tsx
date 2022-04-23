import { Button, TextField } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import React, { FC, useMemo } from 'react'
import { loginFormSchema } from './index.schema';
import { LoginFormContent } from './index.style';

interface LoginFormPayloadData {
    email: string;
    password: string;
}

export const LoginForm:FC = () => {
    const auth = getAuth();

    const handleLogIn = async(data: LoginFormPayloadData, helper: any) => {
        try {
            console.log('[CURRENT USER 1]', auth);
            await signInWithEmailAndPassword(auth, data.email, data.password);

            helper.resetForm();

            console.log('[CURRENT USER 2]', auth);
        } catch (error: any) {
            console.log('[ERROR]', error?.code, error?.message);
        }
    }

    const loginFormInitialValue = useMemo(() => ({
        email: '',
        password: ''
    }), []);

    return <Formik initialValues={loginFormInitialValue} onSubmit={handleLogIn} validationSchema={loginFormSchema} validateOnChange={false} validateOnBlur={true}>
        {formikForm => {
            const { setFieldValue } = formikForm;

            return <LoginFormContent>
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
                <Button fullWidth variant='contained' onClick={() => formikForm.handleSubmit()}>Entrar</Button>
            </LoginFormContent>
        }}
    </Formik>;
};
