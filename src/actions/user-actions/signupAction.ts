'use server'

import { signupSchema, TypesignupSchema } from "@/hooks/use-form/signup-useform"
import { sendVerificationEmail } from "@/lib/mail"
import { findUniqueUserByEmail, insertUserJustSignUp } from "@/lib/queries/user"
import { generateVerificationToken } from "@/lib/tokens"

import { hash } from 'bcryptjs'

export const signUpAction = async (data: TypesignupSchema) => {

    const isDataAsSchema = signupSchema.safeParse(data)    

    if (!isDataAsSchema.success) return { error: 'Os dados não estão formatados' }
    
    const isUserUnique = await findUniqueUserByEmail(isDataAsSchema.data.email)    

    if (isUserUnique) return { error: 'Uma conta já existe com as mesmas credenciais' }

    const hashedPassword = await hash(isDataAsSchema.data.password, 10)

    await insertUserJustSignUp(isDataAsSchema.data.name, isDataAsSchema.data.email, hashedPassword)

    const verificationToken = await generateVerificationToken(isDataAsSchema.data.email)

    await sendVerificationEmail(verificationToken.email, verificationToken.token)

    return { success: 'E-mail de confirmação enviado' }
}