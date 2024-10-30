'use server'

import React from 'react'

import {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from '@/components/ui/card'

import NewVerificationForm from '@/components/shared/form/NewVerificationForm'
import LinkButton from '@/components/shared/button/LinkButton'

const NewVerificationPage = async () => {

    return (
        <>
            <CardHeader className='-mt-28 text-center'>
                <CardTitle>
                    <span className='text-bt-green text-3xl'>
                        Confirmando o seu e-mail
                    </span>
                </CardTitle>
                <CardDescription>
                    <span className='text-bt-lightgray'>
                        Estamos confirmando o seu e-mail. Isso pode levar alguns segundos.
                    </span>
                </CardDescription>
            </CardHeader>
            <CardContent className='mx-24'>
                <NewVerificationForm />
                <LinkButton to='/auth/signin' reverse>Fazer login</LinkButton>
            </CardContent>
        </>
    )
}

export default NewVerificationPage