import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Phone, ShoppingCart } from "lucide-react"
import {
  caminhoProduto,
  rotuloPeriodo,
  tmCheque,
  tmFin,
  tmFrenteCaixa,
  tmIntegrado,
  tmPonto,
  tmRecibo,
  type Produto,
} from "@/src/data/produtos"
import { telefonePrincipal } from "@/src/data/site"
import { buscarPreco, formatarPreco } from "@/src/lib/planos"

export const revalidate = 300

const grupos = [
  {
    titulo: "Quero um sistema para a empresa toda",
    texto: "Estoque, vendas, finanças e ordem de serviço no mesmo lugar.",
    produtos: [tmIntegrado],
  },
  {
    titulo: "Preciso organizar o financeiro e os papéis",
    texto: "Do controle completo das contas até um recibo avulso.",
    produtos: [tmFin, tmCheque, tmRecibo],
  },
  {
    titulo: "Vendo no balcão",
    texto: "Um caixa simples para pequenos negócios.",
    produtos: [tmFrenteCaixa],
  },
  {
    titulo: "Preciso controlar o ponto",
    texto: "Entradas, saídas e horários da equipe.",
    produtos: [tmPonto],
  },
]

const oferta = [
  "Teste grátis antes de comprar",
  "Preço publicado em cada sistema",
  "Suporte incluído na licença",
  "Devolução em até 30 dias, conforme o sistema",
]

function LinhaProduto({ produto, preco }: { produto: Produto; preco: number | null }) {
  const tela = produto.telas[0]

  return (
    <Link href={caminhoProduto(produto)} className="group flex items-start gap-4 py-6 sm:gap-6">
      <div className="flex aspect-[4/3] w-24 shrink-0 items-center justify-center overflow-hidden rounded bg-muted sm:w-36">
        {tela ? (
          <Image
            src={tela.src}
            alt=""
            width={tela.width}
            height={tela.height}
            sizes="(min-width: 640px) 144px, 96px"
            className="h-full w-full object-cover object-left-top"
          />
        ) : (
          <ShoppingCart className="h-8 w-8 text-primary" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-xl font-bold text-foreground group-hover:text-primary group-hover:underline group-hover:underline-offset-4">
          {produto.nome}
        </h4>
        <p className="mt-1 leading-relaxed text-muted-foreground">{produto.resumo}</p>
        {preco !== null && (
          <p className="mt-2 text-sm font-semibold tabular-nums text-foreground">
            {formatarPreco(preco)} {rotuloPeriodo[produto.licenca.periodo]}
          </p>
        )}
      </div>

      <ArrowRight className="mt-1.5 hidden h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 sm:block" />
    </Link>
  )
}

export default async function HomePage() {
  const precos = new Map(
    await Promise.all(
      grupos
        .flatMap((grupo) => grupo.produtos)
        .map(async (produto) => [produto.slug, await buscarPreco(produto.slug)] as const),
    ),
  )

  return (
    <>
      <section className="bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto grid items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl text-balance">
              Programas para Windows que organizam o dia a dia da sua empresa
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
              Cheques, recibos, ponto, caixa, financeiro e estoque. Feitos em Chapecó há mais de 20 anos.
              Baixe, teste de graça e só pague se servir para você.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#sistemas" className="botao-primario">
                Escolher um sistema
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/contato" className="botao-secundario">
                Falar com a LIOS
              </Link>
            </div>
          </div>

          <div className="relative lg:h-[440px]">
            <Image
              src={tmFin.telas[0].src}
              alt="Tela real do TmFin, com o menu financeiro aberto"
              width={tmFin.telas[0].width}
              height={tmFin.telas[0].height}
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full rounded shadow-2xl lg:absolute lg:left-0 lg:top-0 lg:w-[86%]"
            />
            <Image
              src={tmRecibo.telas[0].src}
              alt="Tela real do TmRecibo, com um recibo preenchido e o valor por extenso"
              width={tmRecibo.telas[0].width}
              height={tmRecibo.telas[0].height}
              sizes="340px"
              className="hidden h-auto w-[56%] rounded shadow-2xl lg:absolute lg:bottom-0 lg:right-0 lg:block"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-6 text-secondary-foreground">
        <ul className="container mx-auto grid gap-x-8 gap-y-3 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {oferta.map((item) => (
            <li key={item} className="flex items-start gap-2 font-medium">
              <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="sistemas" className="py-14 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="max-w-2xl text-3xl font-bold text-foreground lg:text-4xl text-balance">
            Escolha pelo que você precisa resolver
          </h2>

          <div className="mt-10 divide-y-2 divide-primary/15 border-t-2 border-primary/15">
            {grupos.map((grupo) => (
              <div key={grupo.titulo} className="grid gap-x-12 pt-8 pb-4 lg:grid-cols-12">
                <div className="lg:col-span-4 lg:pb-8">
                  <h3 className="text-xl font-bold text-primary text-balance">{grupo.titulo}</h3>
                  <p className="mt-2 text-muted-foreground">{grupo.texto}</p>
                </div>
                <div className="divide-y divide-border lg:col-span-8">
                  {grupo.produtos.map((produto) => (
                    <LinhaProduto key={produto.slug} produto={produto} preco={precos.get(produto.slug) ?? null} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-primary-foreground lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold lg:text-4xl text-balance">Não sabe qual escolher?</h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/90">
            Conte o que a sua empresa precisa e a LIOS indica o sistema certo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={telefonePrincipal.href} className="botao-primario">
              <Phone className="h-5 w-5" />
              {telefonePrincipal.exibicao}
            </a>
            <Link href="/contato" className="botao-secundario">
              Ver outros contatos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
