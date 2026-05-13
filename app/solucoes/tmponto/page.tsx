"use client"

import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, 
  Download, 
  Check, 
  Clock, 
  FileText, 
  Printer, 
  Shield, 
  Users,
  CreditCard,
  Zap,
  Network,
  Lock,
  Moon,
  Database,
  Barcode,
  Calculator,
  UserCheck
} from "lucide-react"
import { useState } from "react"
import { TimeTrackingInterface } from "@/components/time-tracking-interface"

export default function TMPontoPage() {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  const recursos = [
    { icon: Printer, text: "Impressão de 2 estilos de crachá" },
    { icon: Barcode, text: "Suporte a código de barras" },
    { icon: Moon, text: "Controle de adicional noturno" },
    { icon: Lock, text: "Bloqueio contra alteração do horário do computador" },
    { icon: Clock, text: "Horários diferenciados por semana e por funcionários" },
    { icon: Database, text: "Backup de dados" },
    { icon: Users, text: "Controle de acesso por usuários" },
    { icon: UserCheck, text: "Checagem de presença (Indicado pra guardas noturnos)" },
    { icon: Calculator, text: "Cálculo de salário para funcionários que recebem por hora" },
    { icon: CreditCard, text: "Permite registrar o ponto somente com o crachá, bloqueando a digitação" },
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
        {/* Background Pattern */}
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
            <div className="animate-fade-in">
              <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Versão 2.0
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                TmPonto
              </h1>
              <p className="text-xl md:text-2xl text-accent font-semibold mb-6">
                Controle de Ponto
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
                O software TmPonto tem como objetivo facilitar, regularizar e controlar 
                o registro do cartão ponto, e ainda possibilitar o controle automático 
                de horas extras. Sem necessidade de equipamentos adicionais como relógio ponto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.lios.com.br/tmpontoi.exe"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/25"
                >
                  <Download className="h-5 w-5" />
                  Baixar Agora
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <TimeTrackingInterface />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                Teste Gratuitamente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-semibold">
                  <Clock className="h-5 w-5" />
                  <span>Sem Equipamentos Extras</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Simples e Objetivo
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O sistema possui como principal vantagem, a não utilização de equipamentos 
                  adicionais como um relógio para captação do ponto. O que pode ser agregado 
                  ao sistema é um simples leitor de código de barras, não sendo obrigatório 
                  o uso do mesmo. Quando o sistema foi projetado, pensou-se em facilitar a 
                  utilização a qualquer tipo de usuário.
                </p>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-semibold">
                  <Zap className="h-5 w-5" />
                  <span>Dois Modos de Controle</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Turnos ou Banco de Horas
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Você poderá optar por controlar por turnos (manhã, tarde e noite) ou 
                  ainda por banco de horas, onde você especifica quantas horas o funcionário 
                  deve cumprir diariamente. Caso trabalhe por turnos, o sistema bloqueia a 
                  entrada ou saída, caso o funcionário venha registrar fora do horário especificado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Como Funciona
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Importação de Relógios
                  </h3>
                  <p>
                    Possui uma função específica de importação de arquivos de relógios 
                    convencionais, podendo ser configurado para qualquer modelo de relógio ponto.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Network className="h-5 w-5 text-primary" />
                    Módulos de Operação
                  </h3>
                  <p>
                    No sistema existem dois módulos de operação, um de controle e outro de 
                    captura de ponto, o qual pode ser instalado em máquinas que pertençam a 
                    uma rede.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Registro Distribuído
                  </h3>
                  <p>
                    Não é necessário que os funcionários se desloquem todos a uma central 
                    para registrar o ponto, podendo registrar em seu próprio setor.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    Banco de Horas
                  </h3>
                  <p>
                    Controle onde o funcionário precisa trabalhar por um número X de horas, 
                    não importando horários e dias. Ao final do mês, recebe horas extras ou folga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recursos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo o que você precisa para controlar o ponto dos funcionários
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {recursos.map((recurso, index) => {
              const IconComponent = recurso.icon
              return (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{recurso.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Download className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Teste gratuitamente
            </p>
            <a
              href="https://www.lios.com.br/tmpontoi.exe"
              className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/25"
            >
              <Download className="h-6 w-6" />
              Baixar Versão de Teste
            </a>
          </div>
        </div>
      </section>

      {/* Licença Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Info Card */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Uso
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Pode ser usado em rede</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Licença única</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">Estações de captação de ponto não requer licença</span>
                  </li>
                </ul>
              </div>

              {/* Price Card */}
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-primary-foreground shadow-xl">
                <h2 className="text-2xl font-bold mb-2">Licença</h2>
                <p className="text-primary-foreground/80 mb-6">
                  Você tem direito a suporte total, atualizações e alterações no sistema.
                </p>
                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-sm text-primary-foreground/70">Licença Anual:</span>
                    <div className="text-3xl font-bold text-accent">
                      R$ 379,50
                    </div>
                    <span className="text-sm text-primary-foreground/70">(1/4 do salário mínimo)</span>
                  </div>
                  <div>
                    <span className="text-sm text-primary-foreground/70">Licença Semestral:</span>
                    <div className="text-2xl font-bold text-accent">
                      R$ 231,00
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="font-bold text-lg mb-2">Compre agora</h3>
                  <p className="text-sm text-primary-foreground/90 mb-4">
                    PIX CNPJ: <span className="font-mono font-bold">28.528.421/0001-09</span>
                  </p>
                  <p className="text-sm text-primary-foreground/80">
                    Encaminhe comprovante para e-mail: <strong>contato@lios.com.br</strong>
                    <br />
                    Junto com seus dados para emissão da Nota Fiscal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Telas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja como o TmPonto funciona na prática
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {/* Main Screenshot */}
            <div className="relative mb-6 bg-card rounded-2xl p-4 border border-border shadow-lg">
              <Image
                src={screenshots[activeScreenshot].src}
                alt={screenshots[activeScreenshot].alt}
                width={1000}
                height={600}
                className="rounded-xl w-full h-auto"
              />
            </div>
            {/* Thumbnails */}
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

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece a usar o TmPonto hoje
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Controle o ponto dos seus funcionários de forma simples e eficiente. 
            Sem necessidade de equipamentos caros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.lios.com.br/tmpontoi.exe"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/25"
            >
              <Download className="h-5 w-5" />
              Baixar Gratuitamente
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
