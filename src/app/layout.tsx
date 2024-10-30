import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Busca Trampo",
  description: "Uma plataforma para busca de emprego focado em freelancers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <main className='main-layout-style-config'>{children}</main>
      </body>
    </html>
  );
}
