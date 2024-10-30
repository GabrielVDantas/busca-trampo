'use server'

import { db } from "../db"

export const findUniqueUserByEmail = async (email: string) => {
    const user = await db.user.findUnique({
        where: { email }
    })

    return user
}

export const insertUserJustSignUp = async (name: string, email: string, password: string) => {
    const user = await db.user.create({
        data: { name, email, password }
    })

    return user
}

export const findUniqueUserById = async (id: string) => {
    const user = await db.user.findUnique({
        where: { id }
    })

    return user
}

export const insertEmailVerifiedDate = async (id: string) => {
    await db.user.update({
        where: { id },
        data: { email_verified: new Date() }
    })
}

export const updateUserEmailToVerified = async (id: string, email: string) => {
    await db.user.update({
        where: { id },
        data: {
            email_verified: new Date(),
            email
        }
    })
}

export const deleteVerificationToken = async (id: string) => {
    await db.verificateEmailToken.delete({
        where: { id }
    })
}
