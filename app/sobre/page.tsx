import Image from "next/image"
import { Building2, Users, Target, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre a LIOS",
  description: "Conheça a LIOS - empresa especializada em soluções de software para gestão empresarial.",
}

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a LIOS</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Há mais de 20 anos desenvolvendo soluções de software que transformam 
              a gestão empresarial de nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A LIOS nasceu da paixão por tecnologia e do desejo de oferecer soluções 
                  que realmente fazem diferença no dia a dia das empresas brasileiras.
                </p>
                <p>
                  Desde nossa fundação, nos dedicamos a desenvolver sistemas robustos, 
                  intuitivos e que atendem às necessidades reais do mercado nacional, 
                  sempre com foco na qualidade e no suporte ao cliente.
                </p>
                <p>
                  Hoje, nossos sistemas estão presentes em centenas de empresas por todo 
                  o Brasil, ajudando empreendedores a gerenciar seus negócios com mais 
                  eficiência e segurança.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-[280px] md:w-[380px] lg:w-[450px] aspect-square mx-auto lg:ml-auto">
              
                <Image
                  src="/images/brasao-tp.png"
                  alt="Brasão da LIOS Sistemas"
                  width={1254}
                  height={1254}
                  sizes="(min-width: 1024px) 450px, (min-width: 768px) 380px, 280px"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Solidez</h3>
              <p className="text-muted-foreground">
                Mais de duas décadas de experiência no mercado de software empresarial.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Parceria</h3>
              <p className="text-muted-foreground">
                Trabalhamos lado a lado com nossos clientes para entregar as melhores soluções.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Foco</h3>
              <p className="text-muted-foreground">
                Soluções direcionadas às necessidades reais do mercado brasileiro.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center shadow-sm border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Qualidade</h3>
              <p className="text-muted-foreground">
                Compromisso com a excelência em cada linha de código que escrevemos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary text-primary-foreground rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Desenvolver soluções de software que simplifiquem a gestão empresarial, 
                  permitindo que nossos clientes foquem no que realmente importa: 
                  fazer seus negócios crescerem.
                </p>
              </div>
              <div className="bg-accent text-accent-foreground rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                <p className="text-accent-foreground/90 leading-relaxed">
                  Ser referência em soluções de gestão empresarial no Brasil, 
                  reconhecida pela qualidade de nossos produtos e pela excelência 
                  no atendimento aos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
