import { z } from 'zod'

export const signupSchema = z.object({
    name: z
        .string({ message: 'O campo "Nome" é obrigatório' })
        .min(1, { message: 'O campo "Nome" é obrigatório' })
        .trim(),
    email: z
        .string({ message: 'O campo "E-mail" é obrigatório' })
        .min(1, { message: 'O campo "Nome" é obrigatório' })
        .email({ message: 'Insira um e-mail válido' })
        .trim(),
    password: z
        .string({ message: 'O campo "Senha" é obrigatório' })
        .min(6, { message: 'O campo "Senha" deve conter pelo menos 6 caracteres' })
        .trim(),
})

export type TypesignupSchema = z.infer<typeof signupSchema>