
"use client"

import { supabase } from "@/src/lib/supabase"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Download,
  Clock,
  FileText,
  Printer,
  Users,
  CreditCard,
  Zap,
  Network,
  Lock,
  Moon,
  Database,
  Barcode,
  Calculator,
  UserCheck,
} from "lucide-react"

import { useEffect, useState } from "react"
import { TimeTrackingInterface } from "@/components/time-tracking-interface"

export default function TMPontoPage() {
  const [activeScreenshot, setActiveScreenshot] = useState(0)
  const [plano, setPlano] = useState<any>(null)

useEffect(() => {
  async function carregarPlano() {
    try {
      const { data, error } = await supabase
        .from("planos")
        .select("*")
        .eq("slug", "tmponto")
        .single()

      if (error) {
        console.error("Erro Supabase:", error)
        return
      }

      console.log("Dados do plano carregados:", data)
      setPlano(data)

    } catch (err) {
      console.error("Erro ao carregar plano:", err)
    }
  }

  carregarPlano()
}, [])
  const recursos = [
    { icon: Printer, text: "Impressão de 2 estilos de crachá" },
    { icon: Barcode, text: "Suporte a código de barras" },
    { icon: Moon, text: "Controle de adicional noturno" },
    { icon: Lock, text: "Bloqueio contra alteração do horário do computador" },
    { icon: Clock, text: "Horários diferenciados por semana e por funcionários" },
    { icon: Database, text: "Backup de dados" },
    { icon: Users, text: "Controle de acesso por usuários" },
    { icon: UserCheck, text: "Checagem de presença" },
    { icon: Calculator, text: "Cálculo de salário por hora" },
    { icon: CreditCard, text: "Registro de ponto com crachá" },
  ]

  const screenshots = [
    { src: "/images/tmponto_1.jpg", alt: "Tela principal do TmPonto" },
    { src: "/images/tmponto_2.jpg", alt: "Registro de ponto" },
    { src: "/images/tmponto_3.jpg", alt: "Controle de funcionários" },
    { src: "/images/tmponto_4.jpg", alt: "Relatórios" },
    { src: "/images/tmponto_5.jpg", alt: "Configurações" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
          <Link
            href="/#card"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para Soluções
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Versão 2.0
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                TmPonto
              </h1>

              <p className="text-xl md:text-2xl text-accent font-semibold mb-6">
                Controle de Ponto
              </p>

              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
                Sistema para controle de ponto eletrônico sem necessidade de relógio ponto.
              </p>

              <a
                href="https://www.lios.com.br/tmpontoi.exe"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all"
              >
                <Download className="h-5 w-5" />
                Baixar Agora
              </a>
            </div>

            <div className="relative">
              <TimeTrackingInterface />

              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                Teste Gratuitamente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recursos
            </h2>

            <p className="text-lg text-muted-foreground">
              Tudo o que você precisa para controlar o ponto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {recursos.map((recurso, index) => {
              const IconComponent = recurso.icon

              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>

                  <p className="text-foreground font-medium">
                    {recurso.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Licença */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Uso
                </h2>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Pode ser usado em rede</span>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Licença única</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-primary-foreground shadow-xl">
                <h2 className="text-2xl font-bold mb-2">
                  Licença
                </h2>

                <p className="text-primary-foreground/80 mb-6">
                  Você tem direito a suporte total, atualizações e alterações no sistema.
                </p>

                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-sm text-primary-foreground/70">
                      Licença Semestral:
                    </span>

                    <div className="text-3xl font-bold text-accent">
                      {plano?.preco ? `R$ ${plano.preco.toFixed(2).replace(".", ",")}` : "Carregando..."}
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-2">
                    Compre agora
                  </h3>

                  <p className="text-sm">
                    PIX CNPJ:
                    <span className="font-mono font-bold">
                      {" "}
                      28.528.421/0001-09
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative mb-6 bg-card rounded-2xl p-4 border border-border shadow-lg">
              <Image
                src={screenshots[activeScreenshot].src}
                alt={screenshots[activeScreenshot].alt}
                width={1000}
                height={600}
                className="rounded-xl w-full h-auto"
              />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScreenshot(index)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                    activeScreenshot === index
                      ? "border-primary shadow-lg scale-105"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={200}
                    height={120}
                    className="w-full h-auto"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}