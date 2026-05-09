"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Download } from "lucide-react"

interface Feature {
  title: string
  description: string
}

interface Screenshot {
  src: string
  alt: string
}

interface ProductPageProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  features: Feature[]
  screenshots: Screenshot[]
  downloadLink?: string
}

export function ProductPage({
  title,
  subtitle,
  description,
  heroImage,
  features,
  screenshots,
  downloadLink,
}: ProductPageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Link 
            href="/solucoes" 
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Soluções
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl text-accent font-semibold mb-4">{subtitle}</p>
              <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
                {description}
              </p>
              {downloadLink && (
                <a
                  href={downloadLink}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  Baixar Versão Demo
                </a>
              )}
            </div>
            <div className="relative">
              <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <Image
                  src={heroImage}
                  alt={title}
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recursos Principais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      {screenshots.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Galeria de Telas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card"
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <p className="text-white p-4 font-medium">{screenshot.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interessado no {title}?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para saber mais sobre como podemos ajudar sua empresa.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  )
}
