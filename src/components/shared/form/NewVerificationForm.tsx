'use client'

import { newVerificationAction } from '@/actions/user-actions/newVerificationAction'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'

const NewVerificationForm = () => {

    const searchParams = useSearchParams()

    const token = searchParams.get('token')

    const submitForm = useCallback(async () => {
        try {
            if (token) await newVerificationAction(token)
        } catch (error) {
            alert('Algo deu errado')
        }
    }, [token])

    useEffect(() => {
        submitForm()
    }, [submitForm])

    return null
}

export default NewVerificationForm