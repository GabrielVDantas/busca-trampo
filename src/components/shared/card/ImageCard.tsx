'use server'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

import cardCss from './Card.module.css'

const ImageCard = async ({ src, alt }: { src: string, alt: string }) => {

    const css = `${cardCss['basic-card-config']} ${cardCss['image-card-layout']} h-full w-1/2 flex flex-col justify-center items-center`

    return (
        <Card className={css}>
            <Image
                src={src}
                alt={alt}
                width={700}
                height={700}
                className='w-full'
            />
            <p className='text-bt-lightgray mt-1 text-sm'>Designed by
                <a className='text-bt-green cursor-pointer' target='_blank' href='https://br.freepik.com/'> Freepik</a>
            </p>
        </Card>
    )
}

export default ImageCard