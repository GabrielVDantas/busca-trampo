'use server'

import { signinSchema, TypeSigninSchema } from "@/hooks/use-form/signin-useform"

import { signIn } from "@/auth"
import { DEFAULT_REDIRECT_PATH } from "@/routes"
import { AuthError } from "next-auth"
import { findUniqueUserByEmail } from "@/lib/queries/user"
import { generateVerificationToken } from "@/lib/tokens"
import { sendVerificationEmail } from "@/lib/mail"

export const signInAction = async (data: TypeSigninSchema) => {

    const isDataAsSchema = signinSchema.safeParse(data)

    if (!isDataAsSchema.success) return { error: 'Os dados não estão formatados' }

    const doesUserExists = await findUniqueUserByEmail(isDataAsSchema.data.email)
    
    if (!doesUserExists) return { error: 'Usuário não encontrado' }

    if (!doesUserExists.email_verified && doesUserExists.email) {
        const verificationToken = await generateVerificationToken(doesUserExists.email)

        await sendVerificationEmail(verificationToken.email, verificationToken.token)

        return { sucess: 'E-mail de confirmação enviado' }
    }

    try {
        await signIn('credentials', {
            email: isDataAsSchema.data.email,
            password: isDataAsSchema.data.password,
            redirectTo: DEFAULT_REDIRECT_PATH
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin': return { error: 'Credenciais inválidas' }
                default: return { error: 'Algo deu errado, login não foi realizado corretamente' }
            }
        }
        throw error
    }
}