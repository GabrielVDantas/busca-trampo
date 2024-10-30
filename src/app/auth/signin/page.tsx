'use server'

import React from 'react'

import {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from '@/components/ui/card'

import LinkButton from '@/components/shared/button/LinkButton'
import SignInForm from '@/components/shared/form/SigninForm'

const SignInPage = async () => {
    return (
        <>
            <CardHeader className='-mt-28 text-center'>
                <CardTitle>
                    <span className='text-bt-green text-3xl'>Login</span>
                </CardTitle>
                <CardDescription>
                    <span className='text-bt-lightgray'>
                        Seja bem-vindo de volta! Insira seus dados e faça login
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent className='mx-24'>
                <SignInForm />
                <LinkButton to='/auth/signup' extraCss='mt-4' reverse>Ainda não tenho uma conta</LinkButton>
            </CardContent>
        </>
    )
}

export default SignInPage