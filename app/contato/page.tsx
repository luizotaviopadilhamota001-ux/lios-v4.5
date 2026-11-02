import type { Metadata } from "next"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { emails, horarioAtendimento, telefones } from "@/src/data/site"

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a LIOS Sistemas por telefone ou e-mail. Atendimento de segunda a sexta, das 8h às 18h.",
}

const linkClass =
  "inline-flex min-h-[44px] items-center text-lg font-semibold text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary [overflow-wrap:anywhere]"

export default function ContatoPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Fale com a LIOS</h1>
          <p className="mt-4 max-w-2xl text-xl text-primary-foreground/90 leading-relaxed">
            Tire suas dúvidas e descubra qual sistema serve para o seu negócio.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <dl className="divide-y divide-border border-y border-border">
            <div className="grid gap-3 py-8 md:grid-cols-3">
              <dt className="flex items-center gap-3 text-lg font-bold text-foreground md:items-start">
                <Phone className="h-5 w-5 shrink-0 text-primary md:mt-1" />
                Telefone
              </dt>
              <dd className="flex flex-col items-start md:col-span-2">
                {telefones.map((telefone) => (
                  <a key={telefone.href} href={telefone.href} className={linkClass}>
                    {telefone.exibicao}
                  </a>
                ))}
              </dd>
            </div>

            <div className="grid gap-3 py-8 md:grid-cols-3">
              <dt className="flex items-center gap-3 text-lg font-bold text-foreground md:items-start">
                <Mail className="h-5 w-5 shrink-0 text-primary md:mt-1" />
                E-mail
              </dt>
              <dd className="flex flex-col items-start gap-1 md:col-span-2">
                <span>
                  <a href={`mailto:${emails.contato}`} className={linkClass}>
                    {emails.contato}
                  </a>
                  <span className="block text-muted-foreground">Dúvidas, compras e comprovantes</span>
                </span>
                <span className="mt-2">
                  <a href={`mailto:${emails.suporte}`} className={linkClass}>
                    {emails.suporte}
                  </a>
                  <span className="block text-muted-foreground">Suporte de quem já usa os sistemas</span>
                </span>
              </dd>
            </div>

            <div className="grid gap-3 py-8 md:grid-cols-3">
              <dt className="flex items-center gap-3 text-lg font-bold text-foreground md:items-start">
                <Clock className="h-5 w-5 shrink-0 text-primary md:mt-1" />
                Atendimento
              </dt>
              <dd className="text-lg text-foreground md:col-span-2">
                {horarioAtendimento}
                <span className="block text-muted-foreground">Atendimento remoto e suporte especializado</span>
              </dd>
            </div>

            <div className="grid gap-3 py-8 md:grid-cols-3">
              <dt className="flex items-center gap-3 text-lg font-bold text-foreground md:items-start">
                <MapPin className="h-5 w-5 shrink-0 text-primary md:mt-1" />
                Endereço
              </dt>
              <dd className="text-lg text-foreground md:col-span-2">
                Chapecó - SC
                <span className="block text-muted-foreground">CEP: 89800-000</span>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}
