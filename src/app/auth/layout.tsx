'use server'

import React from 'react'

import ImageCard from '@/components/shared/card/ImageCard'

import { Card } from '@/components/ui/card'

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <Card className='rounded border-none bg-bt-white h-5/6 w-11/12 flex'>
            <ImageCard src='/images/home-and-auth-page-image.jpg' alt='Imagem da home page' />
            <Card className='rounded border-none h-full w-1/2 flex flex-col justify-center'>
                {children}
            </Card>
        </Card>
    )
}

export default AuthLayout