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
  PlayCircle,
  CreditCard,
  Zap,
  RefreshCw,
  Network,
  Receipt,
  Copy
} from "lucide-react"
import { useState } from "react"
import { CheckManagementInterface } from "@/components/check-management-interface"

export default function TMChequePage() {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  const recursos = [
    { icon: Printer, text: "Impressão Gráfica ou Matricial" },
    { icon: FileText, text: "Imprime cheque em formulário contínuo" },
    { icon: RefreshCw, text: "Gera o preenchimento automático do cheque com suas devidas alterações de datas" },
    { icon: Copy, text: "Imprime cópia do cheque" },
    { icon: Clock, text: "Grava histórico de impressões" },
    { icon: Check, text: "Cruza o cheque" },
    { icon: FileText, text: "Relatórios de cheques impressos e emitidos" },
    { icon: Receipt, text: "Imprime o canhoto" },
    { icon: CreditCard, text: "Imprime a linha \"BOM PARA\"" },
    { icon: FileText, text: "Opção de preencher o campo \"NOMINAL\" somente no canhoto" },
    { icon: Network, text: "Permite impressão em impressoras na rede" },
    { icon: Receipt, text: "Emite Recibo" },
  ]

  const screenshots = [
    { src: "/images/tmcheque_1.jpg", alt: "Tela principal do TmCheque" },
    { src: "/images/tmcheque_2.jpg", alt: "Configuração de impressão" },
    { src: "/images/tmcheque_3.jpg", alt: "Relatórios e histórico" },
  ]

  const vantagens = [
    "Interface simplificada e fácil de utilizar",
    "Impressão de cheques avulsos",
    "Impressão em formulário contínuo",
    "Mantem armazenado as informações já utilizadas, como cheques já impressos",
    "Permitindo a geração de relatórios",
    "Gera cópia da impressão para histórico e controle",
    "Mantém cadastrado dados do Nominal, para uma futura reutilização",
    "Pode ser configurado para vários modelos de cheque e de bancos",
    "Impressão em impressoras matriciais, jato-de-tinta e laser",
    "Efetua impressão direto em impressoras de cheque",
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
                Versão 4.0
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                TmCheque
              </h1>
              <p className="text-xl md:text-2xl text-accent font-semibold mb-6">
                APP Preencher Cheques
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
                Este aplicativo vai reduzir seu tempo de trabalho surpreendentemente. 
                Preencha quantidades expressivas de cheque em minutos. Ou apenas não 
                perca tempo escrevendo a mão linha por linhas de um simples cheque.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.lios.com.br/tmchequei.exe"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/25"
                >
                  <Download className="h-5 w-5" />
                  Baixar Agora
                </a>
                <a
                  href="#tutorial"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  <PlayCircle className="h-5 w-5" />
                  Ver Tutorial
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <CheckManagementInterface />
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
                  <span>Economize Tempo</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Tarefas repetitivas cansam
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Diariamente nos escritórios milhares de pessoas perdem infinitas 
                  horas do seu dias, fazendo tarefas que podem ser automatizadas por 
                  aplicativos. Sempre que um trabalho se repete, ele pode ser automatizado. 
                  Tenha isso em mente e mude sua vida.
                </p>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-semibold">
                  <Zap className="h-5 w-5" />
                  <span>Solução Inteligente</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Por quê eu preciso do TmCheque
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Se você é uma destas pessoas que precisa preencher cheques a mão 
                  ou em maquinas de preencher cheques, rasurando, escrevendo errado 
                  ou não sabendo se sessenta se escreve com {"\"ss\""} ou {"\"ç\""}, o TmCheque 
                  faz este trabalho rapidamente por você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vantagens
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aplicativo possui facilidades que aceleram seu trabalho.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {vantagens.map((vantagem, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground">{vantagem}</span>
              </div>
            ))}
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
              Tudo o que você precisa para preencher cheques de forma profissional
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

      {/* Tutorial Section */}
      <section id="tutorial" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
              <PlayCircle className="h-5 w-5" />
              <span>Para te ajudar</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tutorial de Utilização
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Possui treinamento em vídeo para configurar e utilizar, com exemplos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/ieeB2jOSyB0" 
                title="Tutorial TmCheque - Parte 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/x4gQzFd2n3A" 
                title="Tutorial TmCheque - Parte 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              />
            </div>
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
              href="https://www.lios.com.br/tmchequei.exe"
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
                    <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                    <span className="text-muted-foreground">Não tem suporte a uso em rede</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                    <span className="text-muted-foreground">Licença por computador</span>
                  </li>
                </ul>
              </div>

              {/* Price Card */}
              <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-primary-foreground shadow-xl">
                <h2 className="text-2xl font-bold mb-2">Licença</h2>
                <p className="text-primary-foreground/80 mb-6">Licença é anual, com suporte.</p>
                <div className="mb-8">
                  <span className="text-sm text-primary-foreground/70">Valor:</span>
                  <div className="text-4xl font-bold text-accent">
                    R$ 297,00
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

      {/* Garantia Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ainda está indeciso?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Fique tranquilo, compre, use e se não gostar devolvemos o seu dinheiro 
              em até 30 dias. Nosso objetivo é a sua satisfação e não apenas vender 
              um produto.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Telas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja como o TmCheque funciona na prática
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
            <div className="grid grid-cols-3 gap-4">
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
                    width={300}
                    height={200}
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
            Comece a usar o TmCheque hoje
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Pare de perder tempo preenchendo cheques manualmente. 
            Automatize seu trabalho e ganhe produtividade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.lios.com.br/tmchequei.exe"
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
