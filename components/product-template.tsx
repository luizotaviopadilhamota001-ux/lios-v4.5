import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Download, Phone, ShieldCheck } from "lucide-react"
import { CopiarPix } from "@/components/copiar-pix"
import { GaleriaTelas } from "@/components/galeria-telas"
import { rotuloPeriodo, type Produto } from "@/src/data/produtos"
import { emails, horarioAtendimento, pixCnpj, telefonePrincipal } from "@/src/data/site"
import { buscarPreco, formatarPreco } from "@/src/lib/planos"

export async function ProductTemplate({ produto }: { produto: Produto }) {
  const preco = await buscarPreco(produto.slug)
  const [telaPrincipal, ...demaisTelas] = produto.telas
  const totalOcultos = (produto.maisRecursos?.length ?? 0) + (produto.relatorios?.length ?? 0)
  const assuntoComprovante = encodeURIComponent(`Comprovante de pagamento - ${produto.nome}`)
  const assuntoLink = encodeURIComponent(`Link para baixar o ${produto.nome}`)

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-14">
          <Link
            href="/#sistemas"
            className="inline-flex min-h-[44px] items-center gap-2 text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Ver todos os sistemas
          </Link>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">{produto.nome}</h1>
              <p className="mt-4 text-xl font-semibold text-accent md:text-2xl text-balance">{produto.titulo}</p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/90">{produto.intro}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={produto.download} className="botao-primario">
                  <Download className="h-5 w-5" />
                  Baixar teste grátis
                </a>
                <a href="#comprar" className="botao-secundario">
                  Ver preço
                </a>
              </div>

              <p className="mt-4 text-sm text-primary-foreground/80">
                Programa para Windows{produto.versao ? `, versão ${produto.versao}` : ""}. O download é um instalador .exe.
              </p>
              <a
                href={`mailto:?subject=${assuntoLink}&body=${encodeURIComponent(produto.download)}`}
                className="mt-1 inline-flex min-h-[44px] items-center text-sm font-semibold text-accent underline underline-offset-4 sm:hidden"
              >
                Está no celular? Envie o link para o seu e-mail
              </a>
            </div>

            {telaPrincipal ? (
              <Image
                src={telaPrincipal.src}
                alt={telaPrincipal.alt}
                width={telaPrincipal.width}
                height={telaPrincipal.height}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="mx-auto h-auto w-full rounded shadow-2xl"
                style={{ maxWidth: telaPrincipal.width }}
              />
            ) : (
              produto.comoFunciona && (
                <div className="border-t border-primary-foreground/20 pt-6 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
                  <h2 className="text-2xl font-bold">Como funciona</h2>
                  <ol className="mt-6 space-y-5">
                    {produto.comoFunciona.map((passo, indice) => (
                      <li key={passo} className="flex gap-4">
                        <span className="font-bold tabular-nums text-accent">{indice + 1}.</span>
                        <span className="text-primary-foreground/90">{passo}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {produto.historia.length > 0 && (
        <section className="py-14 md:py-20">
          <div
            className={`container mx-auto grid gap-10 px-4 lg:px-8 ${
              produto.historia.length === 2 ? "max-w-5xl md:grid-cols-2" : "max-w-3xl"
            }`}
          >
            {produto.historia.map((bloco) => (
              <div key={bloco.titulo}>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl text-balance">{bloco.titulo}</h2>
                <div className="mt-4 space-y-3 text-lg leading-relaxed text-muted-foreground">
                  {bloco.texto.map((paragrafo) => (
                    <p key={paragrafo}>{paragrafo}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {demaisTelas.length > 0 && (
        <section className="pb-14 md:pb-20">
          <div className="container mx-auto max-w-4xl px-4 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">Veja o {produto.nome} em uso</h2>
            <GaleriaTelas telas={demaisTelas} />
          </div>
        </section>
      )}

      <section id="recursos" className="bg-muted py-14 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">O que o {produto.nome} faz</h2>

          <ul className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2">
            {produto.destaques.map((destaque) => (
              <li key={destaque} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span className="text-lg text-foreground">{destaque}</span>
              </li>
            ))}
          </ul>

          {totalOcultos > 0 && (
            <details className="mt-8 border-t border-border pt-4">
              <summary className="flex min-h-[44px] cursor-pointer items-center font-semibold text-primary">
                Ver todos os recursos e relatórios
              </summary>

              <div className="mt-4 grid gap-8 md:grid-cols-2">
                {produto.maisRecursos && (
                  <div>
                    <h3 className="font-semibold text-foreground">Mais recursos</h3>
                    <ul className="mt-3 space-y-2 text-muted-foreground">
                      {produto.maisRecursos.map((recurso) => (
                        <li key={recurso}>{recurso}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {produto.relatorios && (
                  <div>
                    <h3 className="font-semibold text-foreground">Relatórios</h3>
                    <ul className="mt-3 space-y-2 text-muted-foreground">
                      {produto.relatorios.map((relatorio) => (
                        <li key={relatorio}>{relatorio}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </details>
          )}
        </div>
      </section>

      <section id="comprar" className="py-14 md:py-20">
        <div className="container mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-5 lg:px-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Teste antes de pagar</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Baixe a versão de teste, instale no Windows e veja se o {produto.nome} serve para a sua empresa.
            </p>
            <a href={produto.download} className="botao-primario mt-6">
              <Download className="h-5 w-5" />
              Baixar teste grátis
            </a>

            <h3 className="mt-10 font-semibold text-foreground">Informações de uso</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {produto.uso.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-primary p-6 text-primary-foreground md:col-span-3 md:p-8">
            <h2 className="text-2xl font-bold">Comprar a licença</h2>

            {preco !== null ? (
              <p className="mt-4">
                <span className="text-4xl font-bold tabular-nums text-accent">{formatarPreco(preco)}</span>{" "}
                <span className="text-lg text-primary-foreground/90">{rotuloPeriodo[produto.licenca.periodo]}</span>
              </p>
            ) : (
              <div className="mt-4">
                <p className="text-3xl font-bold text-accent">Consulte o valor</p>
                <p className="mt-2 text-primary-foreground/90">
                  Não conseguimos mostrar o preço agora.{" "}
                  <Link href="/contato" className="font-semibold underline underline-offset-4">
                    Fale com a LIOS
                  </Link>{" "}
                  e informamos o valor atual.
                </p>
              </div>
            )}

            <p className="mt-2 text-primary-foreground/90">{produto.licenca.nota}</p>

            {produto.garantia && (
              <p className="mt-5 flex items-start gap-3 leading-relaxed">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  Fique tranquilo: compre, use e, se não gostar, devolvemos o seu dinheiro em até 30 dias.
                </span>
              </p>
            )}

            <ol className="mt-6 space-y-5 border-t border-primary-foreground/20 pt-6">
              <li className="flex gap-4">
                <span className="font-bold tabular-nums text-accent">1.</span>
                <div className="min-w-0 flex-1">
                  <p>Faça o PIX para o CNPJ:</p>
                  <CopiarPix cnpj={pixCnpj} />
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold tabular-nums text-accent">2.</span>
                <p className="min-w-0 flex-1">
                  Envie o comprovante e os seus dados para a emissão da Nota Fiscal para{" "}
                  <a
                    href={`mailto:${emails.contato}?subject=${assuntoComprovante}`}
                    className="font-semibold underline underline-offset-4 [overflow-wrap:anywhere]"
                  >
                    {emails.contato}
                  </a>
                  .
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {produto.tutoriais && (
        <section id="tutorial" className="bg-muted py-14 md:py-20">
          <div className="container mx-auto max-w-5xl px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Aprenda a usar em vídeo</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Treinamento em vídeo para configurar e utilizar, com exemplos.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {produto.tutoriais.map((tutorial) => (
                <iframe
                  key={tutorial.id}
                  src={`https://www.youtube.com/embed/${tutorial.id}`}
                  title={tutorial.titulo}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full rounded-lg bg-primary/10"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {produto.faq && (
        <section className="bg-muted py-14 md:py-20">
          <div className="container mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Perguntas frequentes</h2>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {produto.faq.map((item) => (
                <details key={item.pergunta} className="py-2">
                  <summary className="flex min-h-[44px] cursor-pointer items-center font-semibold text-foreground">
                    {item.pergunta}
                  </summary>
                  <p className="pb-3 pt-1 leading-relaxed text-muted-foreground">{item.resposta}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-secondary py-12 text-secondary-foreground">
        <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 lg:flex-row lg:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-bold">Ficou com alguma dúvida?</h2>
            <p className="mt-1 text-secondary-foreground/90">{horarioAtendimento}.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={telefonePrincipal.href} className="botao-primario whitespace-nowrap">
              <Phone className="h-5 w-5" />
              {telefonePrincipal.exibicao}
            </a>
            <Link href="/contato" className="botao-secundario">
              Outros contatos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
