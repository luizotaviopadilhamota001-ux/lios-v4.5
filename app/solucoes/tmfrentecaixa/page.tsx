"use client"

import Image from "next/image"
import Link from "next/link"
import { 
  ArrowLeft, 
  Download, 
  Check, 
  FileText, 
  Shield, 
  PlayCircle,
  Zap,
  Users,
  Printer,
  BarChart3,
  Lock,
  ShoppingCart,
  Smartphone,
  AlertCircle
} from "lucide-react"
import { useState } from "react"
import { POSInterface } from "@/components/pos-interface"

export default function FrenteCaixaPage() {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  const recursos = [
    { icon: Users, text: "Controle por usuários" },
    { icon: ShoppingCart, text: "Foto do produto na tela" },
    { icon: BarChart3, text: "Possibilidade de código de barras" },
    { icon: FileText, text: "Relatórios objetivos" },
    { icon: Printer, text: "Impressão em modo caracter" },
    { icon: Lock, text: "Controle de mesas" },
    { icon: Smartphone, text: "Mini teclado numérico" },
    { icon: Check, text: "Relatórios por dias e horários" },
  ]

  const diferenciais = [
    "Rapidez no atendimento",
    "Interface simples",
    "Fácil operação",
    "Eficiência no controle",
  ]

  const screenshots = [
    { src: "/images/slider_frentecaixa.jpg", alt: "Tela principal do Frente de Caixa" },
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
                Sistema de Caixa Básico
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
                TmFrentecaixa
              </h1>
              <p className="text-xl md:text-2xl text-accent font-semibold mb-6">
                Controle de Vendas Rápido e Eficiente
              </p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed max-w-xl">
                Sistema de frente de caixa básico que registra vendas, emite cupom simplificado 
                e apresenta relatórios com os totais de vendas. Ideal para pequenos restaurantes, 
                quiosques, bancas e negócios em início de operação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.lios.com.br/frentecaixa.exe"
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
              <POSInterface />
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                Teste Gratuitamente
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - O que farei por você */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  O que farei por você?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sou um sistema de frente de caixa básico. Registro vendas, emito um cupom simplificado 
                  e ao final do dia, posso te apresentar relatórios com os totais de vendas.
                </p>
              </div>

              {/* Como funciona */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Como é o meu funcionamento
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tenho uma tela de cadastro de produtos, bem simples, onde você cadastra seus itens com seu valor. 
                  O atendente inicia uma venda e vai colocando o código de cada item vendido. Ao finalizar a venda, 
                  apresento o valor total e ainda auxilio mostrando o valor do troco.
                </p>
              </div>

              {/* Operações do atendente */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  O que o seu atendente poderá movimentar?
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="leading-relaxed">
                    Tenho alguns recursos que você pode configurar, limitando algumas funcionalidades. 
                    Por exemplo, eu posso deixar ou não liberado que meu atendente altere o valor do produto na hora de vender.
                  </p>
                  <p className="leading-relaxed">
                    Posso deixar bloqueado que ele veja o total que foi vendido no período de trabalho dele, 
                    assim somente você poderá acompanhar.
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    Tem controle de estoque?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Não, este não é meu objetivo. Meu funcionamento está totalmente voltado para controle 
                    das vendas e fechamento do caixa para negócios esporádicos, como festas de colégios, 
                    festas de comunidade, etc.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Printer className="h-5 w-5 text-primary" />
                    Preciso ter impressora?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Não é necessário, posso trabalhar tranquilamente sem impressora.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    Controla a abertura da gaveta?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Sim, você pode configurar-me para abrir a gaveta quando fechar uma venda.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5 text-primary" />
                    Controle sobre mesas?
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Sim! Controlo as mesas deixando o número de vendas limitados (1 ao 500). 
                    Quando você digita o número da venda como &apos;23&apos;, significa que está fazendo uma venda 
                    para a mesa 23. Ao finalizar, a mesa fica livre para novo atendimento.
                  </p>
                </div>
              </div>

              {/* Ideal para */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Negócios que eu gosto de controlar
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="leading-relaxed">
                    Sou ideal para ser usado em pequenos restaurantes, quiosques, bancas. Tem gente me usando 
                    até para emitir os tickets de quermesses, acredita?
                  </p>
                  <p className="leading-relaxed">
                    Como tenho um funcionamento simplificado, ajudo muito as pessoas que estão iniciando seus negócios.
                  </p>
                </div>
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
              Recursos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo o que você precisa para gerenciar suas vendas de forma eficiente
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {recursos.map((recurso, index) => {
              const IconComponent = recurso.icon
              return (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all group text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors mx-auto">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{recurso.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Características que fazem o TM Frente de Caixa a melhor escolha
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
              Teste gratuitamente o TM Frente de Caixa
            </p>
            <a
              href="https://www.lios.com.br/frentecaixa.exe"
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
                    R$ 298,00
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
              Veja como o Frente de Caixa funciona na prática
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {/* Main Screenshot */}
            <div className="relative bg-card rounded-2xl p-4 border border-border shadow-lg">
              <Image
                src={screenshots[activeScreenshot].src}
                alt={screenshots[activeScreenshot].alt}
                width={1000}
                height={600}
                className="rounded-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece a usar o Frente de Caixa hoje
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Tenha o controle total de suas vendas com uma interface intuitiva e operação simples. 
            Ideal para pequenos negócios que buscam rapidez e eficiência no atendimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.lios.com.br/frentecaixa.exe"
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
