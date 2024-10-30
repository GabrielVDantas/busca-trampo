import { Button } from '@/components/ui/button'
import React from 'react'

import btnCss from './Button.module.css'

interface Props {
    children: React.ReactNode
    isPending: boolean,
    full?: boolean
}

const SubmitButton = ({ children, isPending, full = false }: Props) => {
    let css = `${btnCss['button-reverse-style']} mt-4`
    if (full) css = `${css}  w-full`

    return <Button type='submit' className={css} disabled={isPending}>{children}</Button>

}

export default SubmitButton