'use server'

import Link from 'next/link'
import React from 'react'

import linkCss from './Button.module.css'

interface Props {
    to: string,
    children: React.ReactNode,
    extraCss?: string,
    reverse?: boolean
}

const LinkButton = async ({ to, children, extraCss, reverse = false }: Props) => {

    let css = `${linkCss['basic-link-layout']} ${extraCss}`
    if (!reverse) css = `${css} ${linkCss['button-style']}`
    if (reverse) css = `${css} ${linkCss['button-reverse-style']}`

    return <Link href={to} className={css}>{children}</Link>
}

export default LinkButton