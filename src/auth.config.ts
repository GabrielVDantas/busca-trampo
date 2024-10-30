import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"

import { signinSchema } from "./hooks/use-form/signin-useform"
import { findUniqueUserByEmail } from "./lib/queries/user"

import { compare } from 'bcryptjs'

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const isDataAsSchema = signinSchema.safeParse(credentials)

        if (!isDataAsSchema.success) return null

        const isUserUnique = await findUniqueUserByEmail(isDataAsSchema.data.email)

        if (!isUserUnique) return null

        const isPasswordCorrect = await compare(isDataAsSchema.data.password, isUserUnique.password!)

        if (isPasswordCorrect) return isUserUnique

        return null
      }
    })
  ],
} satisfies NextAuthConfig