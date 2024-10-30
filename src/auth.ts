import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db"
import { findUniqueUserById, insertEmailVerifiedDate } from "./lib/queries/user"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token

      const doesUserExists = await findUniqueUserById(token.sub)
      if (!doesUserExists) return token

      token.role = doesUserExists.role

      return token
    },
    async session({ token, session }) {
      if (token.sub && session.user) session.user.id = token.sub

      if (token.role && session.user) session.user.role = token.role as 'ADMIN' | 'USER'

      return session
    },
    async signIn({ user }) {
      const doesUserExists = await findUniqueUserById(user.id!)
      if (!doesUserExists || !doesUserExists.email_verified) return false

      return true
    }
  },
  events: {
    async linkAccount({ user }) {
      await insertEmailVerifiedDate(user.id!)
    },
  },
  pages: {
    signIn: '/auth/signin'
  },
  ...authConfig,
})