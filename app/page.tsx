import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Monitor,
  Clock,
  FileCheck,
  CreditCard,
  Calculator,
  Receipt,
} from "lucide-react"

const products = [
  {
    name: "TM Integrado",
    description:
      "ERP completo para gestão financeira, estoque, vendas e emissão fiscal.",
    href: "/solucoes/tmintegrado",
    icon: Monitor,
  },
  {
    name: "TM Frente de Caixa",
    description:
      "PDV moderno e rápido para otimizar atendimento e vendas.",
    href: "/solucoes/tmfrentecaixa",
    icon: CreditCard,
  },
  {
    name: "TM Ponto",
    description:
      "Controle de ponto eletrônico simples, seguro e dentro da legislação.",
    href: "/solucoes/tmponto",
    icon: Clock,
  },
  {
    name: "TM Cheque",
    description:
      "Gestão de cheques e recebimentos com mais controle e segurança.",
    href: "/solucoes/tmcheque",
    icon: FileCheck,
  },
  {
    name: "TM Financeiro",
    description:
      "Controle financeiro empresarial com fluxo de caixa e relatórios completos.",
    href: "/solucoes/tmfin",
    icon: Calculator,
  },
  {
    name: "TM Recibo",
    description:
      "Emissão rápida de recibos profissionais de forma prática e organizada.",
    href: "/solucoes/tmrecibo",
    icon: Receipt,
  },
]

const features = [
  "Mais de 20 anos de experiência",
  "Suporte técnico especializado",
  "Atualizações constantes",
  "Integração entre sistemas",
  "Backup automático",
  "Treinamento incluso",
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight text-balance">
                Soluções em Software para o{" "}
                <span className="text-accent">Sucesso</span> da Sua Empresa
              </h1>

              <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                Há mais de 20 anos desenvolvendo sistemas de gestão empresarial
                que transformam a maneira como você administra seu negócio.
                Tecnologia confiável e suporte especializado.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] hover:bg-accent/90 transition-all"
                >
                  Fale Conosco
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/sobre"
                  className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors"
                >
                  Conheça a LIOS
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-[220px] md:w-[300px] lg:w-[360px] aspect-square mx-auto lg:ml-auto">
                
                <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full" />

                <Image
                  src="/images/brasao-tp.png"
                  alt="LIOS Sistemas - Software de Gestão"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-xl">
                <span className="font-bold text-2xl">+20</span>
                <span className="block text-sm">anos de mercado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-secondary py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Card de produtos */}
      <section id="card" className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
            
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Nossas <span className="text-primary">Soluções</span>
            </h2>

            <p className="mt-4 text-muted-foreground text-lg">
              Sistemas desenvolvidos para atender todas as necessidades da sua empresa,
              do controle financeiro à gestão completa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => {
              const Icon = product.icon

              return (
                <Link
                  key={product.href}
                  href={product.href}
                  className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border/40 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-300 hover:-translate-y-2"
                >
                  
                  {/* Card Visual */}
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10 flex items-center justify-center">

                    <div className="absolute w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

                    <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />

                    <div className="w-20 h-20 rounded-2xl bg-background border border-border/50 shadow-lg flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-accent" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-grow p-6 lg:p-7">

                    <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-muted-foreground text-sm lg:text-base leading-relaxed flex-grow">
                      {product.description}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:text-accent transition-colors pt-5 mt-5 border-t border-border/30">
                      Saiba mais

                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">

          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
            Pronto para Transformar sua Gestão Empresarial?
          </h2>

          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções podem
            otimizar os processos da sua empresa.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] hover:bg-accent/90 transition-all"
            >
              Solicitar Demonstração

              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+554432263769"
              className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-colors"
            >
              (+55) 49 9956-8072
            </a>
          </div>
        </div>
      </section>
    </>
  )
}