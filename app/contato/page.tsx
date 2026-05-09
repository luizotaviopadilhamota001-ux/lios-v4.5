"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-20 md:py-28">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container relative mx-auto px-4">

          <div className="max-w-3xl mx-auto text-center">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Estamos prontos para ajudar sua empresa a crescer.
              Fale conosco e descubra a solução ideal para seu negócio.
            </p>

          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 md:py-28 bg-muted/30">

        <div className="container mx-auto px-4">

          <div className="max-w-5xl mx-auto">

            <div className="text-center mb-14">

              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Informações de Contato
              </h2>

              <p className="mt-4 text-lg text-muted-foreground">
                Entre em contato pelos canais abaixo.
              </p>

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Telefone */}
              <div className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-center">

                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <Phone className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Telefone
                </h3>

                <p className="text-muted-foreground">
                  (+55) 49 9956-8072
                </p>

                <p className="text-muted-foreground">
                  (+55) 48 9671-1257
                </p>

              </div>

              {/* Email */}
              <div className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-center">

                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  E-mail
                </h3>

                <p className="text-muted-foreground">
                  contato@lios.com.br
                </p>

                <p className="text-muted-foreground">
                  suporte@lios.com.br
                </p>

              </div>

              {/* Endereço */}
              <div className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-center">

                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Endereço
                </h3>

                <p className="text-muted-foreground">
                  
                </p>

                <p className="text-muted-foreground">
                  Chapecó - SC
                </p>

                <p className="text-muted-foreground">
                  CEP: 89800-000
                </p>

              </div>

              {/* Horário */}
              <div className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center justify-center">

                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                  <Clock className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  Horário de Atendimento
                </h3>

                <p className="text-muted-foreground">
                  Segunda a Sexta
                </p>

                <p className="text-muted-foreground">
                  8h às 18h
                </p>

                <p className="text-muted-foreground">
                  Atendimento remoto e suporte especializado
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}