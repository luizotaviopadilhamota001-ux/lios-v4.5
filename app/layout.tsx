import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsappButton } from "@/components/WhatsappButton"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "LIOS Sistemas - Soluções em Software para sua Empresa",
  description:
    "Há mais de 20 anos desenvolvendo sistemas de gestão empresarial. TM Integrado, Frente de Caixa, TM Ponto, TM Cheque, TM Financeiro e muito mais.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} bg-background`}>
      <body className="font-sans min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

        <WhatsappButton />
      </body>
    </html>
  )
}