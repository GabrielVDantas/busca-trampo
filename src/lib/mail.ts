import { Resend } from 'Resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Confirme seu e-mail',
        html: `<p>
                Você está quase lá, falta apenas um passo. Clique no botão e confirme seu e-mail 
                <a href=${confirmLink}>Confirmar meu e-mail</a>
            </p>`
    })
}