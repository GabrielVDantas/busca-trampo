'use client'

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupSchema, TypesignupSchema } from '@/hooks/use-form/signup-useform'

import formCss from './Form.module.css'
import SubmitButton from '../button/SubmitButton'
import { signUpAction } from '@/actions/user-actions/signupAction'

const SignupForm = () => {
    const [isPending, startTransition] = useTransition()

    const form = useForm<TypesignupSchema>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const submitForm = async (data: TypesignupSchema) => {
        try {
            startTransition(async () => {
                await signUpAction(data)
                form.reset()
            })
        } catch (error) {

        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)}>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={formCss['label-style']}>Nome:</FormLabel>
                            <FormControl>
                                <Input {...field}
                                    className={formCss['basic-input-style']}
                                    disabled={isPending}
                                    type='text'
                                    placeholder='Insira o seu nome' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem className={formCss['form-item-layout']}>
                            <FormLabel className={formCss['label-style']}>E-mail:</FormLabel>
                            <FormControl>
                                <Input {...field}
                                    className={formCss['basic-input-style']}
                                    disabled={isPending}
                                    type='text'
                                    placeholder='Insira o seu e-mail' />
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
                                    placeholder='Insira a sua senha' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton full isPending={isPending}>Criar conta</SubmitButton>
            </form>
        </Form>
    )
}

export default SignupForm