import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

const products = [
  { name: "TM Integrado", href: "/solucoes/tmintegrado" },
  { name: "Frente de Caixa", href: "/solucoes/frentecaixa" },
  { name: "TM Ponto", href: "/solucoes/tmponto" },
  { name: "TM Cheque", href: "/solucoes/tmcheque" },
  { name: "TM Financeiro", href: "/solucoes/tmfin" },
  { name: "TM Recibo", href: "/solucoes/tmrecibo" },
]

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
                  alt="LIOS Sistemas"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl">LIOS Sistemas</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Há mais de 20 anos desenvolvendo soluções em software para gestão empresarial. 
              Tecnologia e inovação para o sucesso do seu negócio.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Soluções</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.href}>
                  <Link 
                    href={product.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link 
                  href="/contato"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-accent shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  (+55) 49 9956-8072
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-accent shrink-0" />
                <a 
                  href="mailto:contato@lios.com.br"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  contato@lios.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Chapecó - SC
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            &copy; {new Date().getFullYear()} LIOS Sistemas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
