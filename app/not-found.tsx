import type { Metadata } from "next"
import Link from "next/link"
import { caminhoProduto, produtos } from "@/src/data/produtos"

export const metadata: Metadata = {
  title: "Página não encontrada",
}

export default function NotFound() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">Página não encontrada</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          O endereço pode ter mudado. Escolha um dos sistemas abaixo ou volte para o início.
        </p>

        <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
          {produtos.map((produto) => (
            <li key={produto.slug}>
              <Link
                href={caminhoProduto(produto)}
                className="inline-flex min-h-[44px] items-center font-semibold text-primary underline underline-offset-4"
              >
                {produto.nome}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="botao-primario">
            Voltar para o início
          </Link>
          <Link href="/contato" className="botao-claro">
            Falar com a LIOS
          </Link>
        </div>
      </div>
    </section>
  )
}
