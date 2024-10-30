'use client'

import React, { useTransition } from 'react'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import SubmitButton from '../button/SubmitButton'

import {
    signinSchema,
    TypeSigninSchema
} from '@/hooks/use-form/signin-useform'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import formCss from './Form.module.css'
import { signInAction } from '@/actions/user-actions/signinAction'

const SignInForm = () => {
    const [isPending, startTransition] = useTransition()

    const form = useForm<TypeSigninSchema>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const submitForm = async (data: TypeSigninSchema) => {
        startTransition(async () => {
            await signInAction(data)
            form.reset()
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={formCss['label-style']}>Email:</FormLabel>
                            <FormControl>
                                <Input {...field}
                                    className={formCss['basic-input-style']}
                                    disabled={isPending}
                                    type='text'
                                    placeholder='Insira seu e-mail'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem className={formCss['form-item-layout']}>
                            <FormLabel className={formCss['label-style']}>Senha:</FormLabel>
                            <FormControl>
                                <Input {...field}
                                    className={formCss['basic-input-style']}
                                    disabled={isPending}
                                    type='text'
                                    placeholder='Insira sua senha'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton full isPending={isPending}>Entrar</SubmitButton>
            </form>
        </Form>
    )
}

export default SignInForm