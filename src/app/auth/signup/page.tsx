'use server'

import React from 'react'

import {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from '@/components/ui/card'

import SignupForm from '@/components/shared/form/SignupForm'
import LinkButton from '@/components/shared/button/LinkButton'


const SignUpPage = async () => {
    return (
        <>
            <CardHeader className='-mt-28 text-center'>
                <CardTitle>
                    <span className='text-bt-green text-3xl'>Criar conta</span>
                </CardTitle>
                <CardDescription>
                    <span className='text-bt-lightgray'>
                        Sua primeira vez aqui? Sem problemas! Insira seus dados e crie sua conta
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent className='mx-24'>
                <SignupForm />
                <LinkButton to='/auth/signin' extraCss='mt-4' reverse>Já tenho uma conta</LinkButton>
            </CardContent>
        </>
    )
}

export default SignUpPage