import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { publicRoutes, authRoutes, apiAuthPrefix, DEFAULT_REDIRECT_PATH } from "./routes"

export const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth

    const isApiAuthPrefix = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)

    if (isApiAuthPrefix) return undefined
    

    if (isAuthRoute && isLoggedIn) return Response.redirect(new URL(DEFAULT_REDIRECT_PATH, nextUrl))
    
    if (isAuthRoute) return undefined
    

    if (!isLoggedIn && !isPublicRoute) return Response.redirect(new URL("/auth/signin", nextUrl))
    
    return undefined
})

// TUDO AQUILO QUE ESTIVER DE ACORDO COM O MATCHER FARÁ COM QUE ELE INVOQUE A FUNÇÃO auth
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}
