'use server'

import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import LinkButton from '@/components/shared/button/LinkButton'
import ImageCard from '@/components/shared/card/ImageCard'

const HomePage = async () => {
  return (
    <Card className='rounded border-none bg-bt-white h-5/6 w-11/12 flex'>
      <Card className='rounded border-none h-full w-1/2 flex flex-col justify-center'>
        <CardHeader className='-mt-28'>
          <CardTitle>
            <span className='text-4xl text-bt-darkgray'>Olá, seja bem-vindo(a) ao
              <strong className='text-bt-green'> Busca Trampo</strong>
            </span>
          </CardTitle>
          <CardDescription className='mr-14'>
            <span className='text-bt-lightgray'>
              Querendo fazer uma renda extra? Está buscando alguém para fazer um serviço?
              O Busca Trampo resolve seus problemas!
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className='flex gap-3'>
          <LinkButton to='/auth/signup' reverse>Criar conta</LinkButton>
          <LinkButton to='/auth/signin'>Entrar</LinkButton>
        </CardContent>
      </Card>
      <ImageCard src='/images/home-and-auth-page-image.jpg' alt='Imagem da home page' />
    </Card>
  )
}

export default HomePage
