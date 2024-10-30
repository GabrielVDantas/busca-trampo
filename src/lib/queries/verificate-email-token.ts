'use server'

import { db } from "../db"

export const findVerificationTokenByEmail = async (email: string) => {
    const verificationToken = await db.verificateEmailToken.findFirst({
        where: { email }
    })

    return verificationToken
}

export const findVerificationTokenByToken = async (token: string) => {
    const verificationToken = await db.verificateEmailToken.findUnique({
        where: { token }
    })

    return verificationToken
}