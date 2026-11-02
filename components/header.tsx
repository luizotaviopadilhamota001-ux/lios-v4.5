"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { caminhoProduto, produtos } from "@/src/data/produtos"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const emSolucoes = pathname.startsWith("/solucoes")

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setProductsOpen(false)
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  const linkDesktop = (ativo: boolean) =>
    `inline-flex min-h-[44px] items-center gap-1 font-medium transition-colors hover:text-accent ${
      ativo ? "text-accent" : "text-primary-foreground/90"
    }`

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 lg:px-8" aria-label="Principal">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex min-h-[44px] items-center gap-3">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12">
              <Image
                src="/images/brasao-tp.png"
                alt=""
                fill
                sizes="48px"
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
              aria-current={pathname === "/" ? "page" : undefined}
              className={linkDesktop(pathname === "/")}
            >
              Início
            </Link>

            {/* produtos pagina que abre pra baixo */}
            <div
              ref={productsRef}
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
              onBlur={(event) => {
                if (!productsRef.current?.contains(event.relatedTarget)) setProductsOpen(false)
              }}
            >
              <button
                type="button"
                onClick={() => setProductsOpen((aberto) => !aberto)}
                aria-expanded={productsOpen}
                aria-controls="menu-solucoes"
                className={linkDesktop(emSolucoes)}
              >
                Soluções
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>

              {productsOpen && (
                <div id="menu-solucoes" className="absolute top-full left-0 w-80">
                  <div className="bg-card rounded-lg shadow-xl border border-border p-2">
                    {produtos.map((produto) => {
                      const caminho = caminhoProduto(produto)
                      return (
                        <Link
                          key={produto.slug}
                          href={caminho}
                          aria-current={pathname === caminho ? "page" : undefined}
                          onClick={() => setProductsOpen(false)}
                          className="block px-4 py-3 rounded-md hover:bg-muted transition-colors"
                        >
                          <span className="font-medium text-foreground">{produto.nome}</span>
                          <span className="block text-sm text-muted-foreground">{produto.menu}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/sobre"
              aria-current={pathname === "/sobre" ? "page" : undefined}
              className={linkDesktop(pathname === "/sobre")}
            >
              Sobre
            </Link>

            <Link
              href="/contato"
              aria-current={pathname === "/contato" ? "page" : undefined}
              className="bg-accent text-accent-foreground px-5 py-2.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-primary-foreground flex h-11 w-11 items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
                className="flex min-h-[44px] items-center text-primary-foreground/90 hover:text-accent px-4 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </Link>

              <div className="px-4 py-2">
                <span className="text-primary-foreground/80 text-sm font-medium">Soluções</span>
                <div className="mt-1 flex flex-col pl-4">
                  {produtos.map((produto) => {
                    const caminho = caminhoProduto(produto)
                    return (
                      <Link
                        key={produto.slug}
                        href={caminho}
                        aria-current={pathname === caminho ? "page" : undefined}
                        className={`flex min-h-[44px] items-center hover:text-accent transition-colors ${
                          pathname === caminho ? "text-accent" : "text-primary-foreground/90"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {produto.nome}
                      </Link>
                    )
                  })}
                </div>
              </div>

              <Link
                href="/sobre"
                aria-current={pathname === "/sobre" ? "page" : undefined}
                className="flex min-h-[44px] items-center text-primary-foreground/90 hover:text-accent px-4 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>

              <Link
                href="/contato"
                aria-current={pathname === "/contato" ? "page" : undefined}
                className="bg-accent text-accent-foreground mx-4 mt-2 px-4 py-2.5 rounded-lg font-semibold text-center"
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
