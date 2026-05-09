"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

const products = [
  { name: "TM Integrado", href: "/solucoes/tmintegrado", description: "Sistema completo de gestão empresarial" },
  { name: "TM FrenteCaixa", href: "/solucoes/tmfrentecaixa", description: "PDV rápido e eficiente" },
  { name: "TM Ponto", href: "/solucoes/tmponto", description: "Controle de ponto eletrônico" },
  { name: "TM Cheque", href: "/solucoes/tmcheque", description: "Gestão de cheques e recebíveis" },
  { name: "TM Financeiro", href: "/solucoes/tmfin", description: "Controle financeiro completo" },
  { name: "TM Recibo", href: "/solucoes/tmrecibo", description: "Emissão de recibos profissionais" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/images/brasao-tp.png"
                alt="LIOS Sistemas"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-primary-foreground font-bold text-xl lg:text-2xl">
              LIOS Sistemas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-primary-foreground/90 hover:text-accent transition-colors font-medium"
            >
              Início
            </Link>
            
            {/* produtos pagina que abre pra baixo */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 text-primary-foreground/90 hover:text-accent transition-colors font-medium">
                Soluções
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              
              {productsOpen && (
                <div className="absolute top-full left-0 pt-2 w-72">
                  <div className="bg-card rounded-lg shadow-xl border border-border p-2">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block px-4 py-3 rounded-md hover:bg-muted transition-colors"
                      >
                        <span className="font-medium text-foreground">{product.name}</span>
                        <span className="block text-sm text-muted-foreground">{product.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/sobre" 
              className="text-primary-foreground/90 hover:text-accent transition-colors font-medium"
            >
              Sobre
            </Link>
            
            <Link 
              href="/contato" 
              className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="text-primary-foreground/90 hover:text-accent px-4 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </Link>
              
              <div className="px-4 py-2">
                <span className="text-primary-foreground/70 text-sm font-medium">Soluções</span>
                <div className="mt-2 flex flex-col gap-1 pl-4">
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="text-primary-foreground/80 hover:text-accent py-1.5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/sobre" 
                className="text-primary-foreground/90 hover:text-accent px-4 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              
              <Link 
                href="/contato" 
                className="bg-accent text-accent-foreground mx-4 px-4 py-2.5 rounded-lg font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
