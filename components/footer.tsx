import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { caminhoProduto, produtos } from "@/src/data/produtos"
import { emails, telefonePrincipal } from "@/src/data/site"

const linkClass =
  "inline-flex min-h-[44px] items-center text-primary-foreground/80 hover:text-accent transition-colors text-sm lg:min-h-0 lg:py-1"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/brasao-tp.png"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">LIOS Sistemas</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Há mais de 20 anos desenvolvendo programas de gestão para empresas, em Chapecó - SC.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-accent">Soluções</h3>
            <ul>
              {produtos.map((produto) => (
                <li key={produto.slug}>
                  <Link href={caminhoProduto(produto)} className={linkClass}>
                    {produto.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-accent">Links Rápidos</h3>
            <ul>
              <li>
                <Link href="/" className={linkClass}>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className={linkClass}>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className={linkClass}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-accent">Contato</h3>
            <ul>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href={telefonePrincipal.href} className={linkClass}>
                  {telefonePrincipal.exibicao}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href={`mailto:${emails.contato}`} className={linkClass}>
                  {emails.contato}
                </a>
              </li>
              <li className="flex items-center gap-3 py-1">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Chapecó - SC
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            &copy; {new Date().getFullYear()} LIOS Sistemas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
