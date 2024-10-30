import { z } from 'zod'

export const signinSchema = z.object({
    email: z
        .string({ message: 'O campo "E-mail" é obrigatório' })
        .min(1, { message: 'O campo "Nome" é obrigatório' })
        .email({ message: 'Insira um e-mail válido' })
        .trim(),
    password: z
        .string({ message: 'O campo "Senha" é obrigatório' })
        .min(1, { message: 'O campo "Senha" é obrigatório' })
        .trim(),
})

export type TypeSigninSchema = z.infer<typeof signinSchema>
