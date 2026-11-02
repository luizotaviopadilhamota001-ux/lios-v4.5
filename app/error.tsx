"use client"

import Link from "next/link"

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">Esta página não carregou</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Algo falhou do nosso lado. Tente de novo ou fale com a LIOS.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="botao-primario">
            Tentar de novo
          </button>
          <Link href="/contato" className="botao-claro">
            Falar com a LIOS
          </Link>
        </div>
      </div>
    </section>
  )
}
