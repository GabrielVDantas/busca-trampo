'use server'

import { db } from "@/lib/db"
import { findUniqueUserByEmail } from "@/lib/queries/user"
import { findVerificationTokenByToken } from "@/lib/queries/verificate-email-token"

export const newVerificationAction = async (token: string) => {
    const isTokenValid = await findVerificationTokenByToken(token)

    if (!isTokenValid) return { error: 'Token de verificação não existe' }

    const hasTokenExpired = new Date(isTokenValid.expires) < new Date()

    if (hasTokenExpired) return { error: 'O token de verificação expirou' }

    const doesUserExists = await findUniqueUserByEmail(isTokenValid.email)

    if (!doesUserExists) return { error: 'Usuário não encontrado' }

    await db.user.update({
        where: { id: doesUserExists.id },
        data: {
            email_verified: new Date(),
            email: isTokenValid.email,
        }
    })

    await db.verificateEmailToken.delete({
        where: { id: isTokenValid.id }
    })

    return { sucess: 'E-mail verificado' }
}