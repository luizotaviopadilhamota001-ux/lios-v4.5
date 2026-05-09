"use client"

import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, 
  Download, 
  Check, 
  Clock, 
  FileText, 
  Shield, 
  PlayCircle,
  BarChart3,
  Zap,
  RefreshCw,
  Network,
  Receipt,
  Users,
  CreditCard,
  TrendingUp,
  Copy
} from "lucide-react"
import { useState } from "react"
import { FinancialDashboardInterface } from "@/components/TM-financeiro"

export default function TMFinPage() {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  const recursos = [
    { icon: CreditCard, text: "Contas a pagar" },
    { icon: TrendingUp, text: "Contas a receber" },
    { icon: FileText, text: "Cheques emitidos" },
    { icon: Receipt, text: "Cheques recebidos" },
    { icon: RefreshCw, text: "Repasse de cheques" },
    { icon: Copy, text: "Cheques devolvidos" },
    { icon: BarChart3, text: "Controle de contas bancárias e caixa" },
    { icon: Network, text: "Lançamentos por categorias e subcategorias" },
  ]

  const relatorios = [
    "Fluxo de caixa",
    "Contas a Receber/Pagar vencidas, pagas, em aberto e geral",
    "Movimentação de caixa",
    "Cheques emitidos por período, por cliente, compensados, etc",
    "Cheques recebidos por cliente, por data, por vencimento, devolvidos e repassados",
    "Relatórios de clientes e fornecedores diversos",
  ]

  const diferenciais = [
    "Interface intuitiva",
    "Não precisa de mouse",
    "Fácil aprendizado",
    "Sistema rápido e eficiente",
  ]

  const screenshots = [
    { src: "/images/tmfin_1.jpg", alt: "Tela principal do TmFin" },
    { src: "/images/tmfin_2.jpg", alt: "Contas a receber" },
    { src: "/images/tmfin_3.jpg", alt: "Cheques" },
    { src: "/images/tmfin_4.jpg", alt: "Relatórios" },
    { src: "/images/tmfin_5.jpg", alt: "Configurações" },
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
            href="/solucoes" 
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para Soluções
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Sistema Completo
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                TmFin
              </h1>
              <p className="text-xl md:text-2xl text-accent font-semibold mb-6">
                Controle Financeiro Prático e Intuitivo
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
                O TmFin é um prático sistema de controle financeiro desenvolvido com 
                uma interface totalmente intuitiva. Você não precisará de treinamento para 
                entender o sistema. Basta analisar cada atalho e perceberá o quão fácil é operá-lo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.lios.com.br/tmfini.exe"
                  className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-all hover:scale-105 shadow-lg shadow-accent/25"
                >
                  <Download className="h-5 w-5" />
                  Baixar Agora
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  <PlayCircle className="h-5 w-5" />
                  Conheça os Recursos
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <FinancialDashboardInterface />
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
                  <Users className="h-5 w-5" />
                  <span>Gestão Completa</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Cadastro de Clientes e Fornecedores
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  O TmFin permite que você cadastre seus clientes e fornecedores e gerencie 
                  contas a receber e a pagar. Controle cheques emitidos e recebidos com facilidade.
                </p>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-semibold">
                  <BarChart3 className="h-5 w-5" />
                  <span>Controle Financeiro</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Saldo de Contas e Caixa
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Controle saldo de contas bancárias através do cruzamento de pagamentos, 
                  recebimentos e cheques. Tenha uma visão completa das suas finanças.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recursos Principais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo o que você precisa para gerenciar suas finanças de forma profissional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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

      {/* Relatórios Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
              <FileText className="h-5 w-5" />
              <span>Análise e Controle</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diversidade de Relatórios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mantenha-se seguro com informações completas sobre suas finanças
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {relatorios.map((relatorio, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground">{relatorio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Características que fazem TmFin a melhor escolha
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {diferenciais.map((diferencial, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors mx-auto">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">{diferencial}</p>
              </div>
            ))}
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
              Teste gratuitamente o TmFin
            </p>
            <a
              href="https://www.lios.com.br/tmfini.exe"
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
                    <span className="text-muted-foreground">Pode ser usado em rede</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Licença por computador</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">Suporte anual incluído</span>
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
                    R$ 329,00
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
              Veja como o TmFin funciona na prática
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
            Comece a usar o TmFin hoje
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Tenha o controle total de suas finanças com uma interface intuitiva e 
            relatórios completos. Automatize seu trabalho e ganhe produtividade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.lios.com.br/tmfini.exe"
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
