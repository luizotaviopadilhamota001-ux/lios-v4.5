"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

type Estado = "parado" | "copiado" | "falhou"

export function CopiarPix({ cnpj }: { cnpj: string }) {
  const [estado, setEstado] = useState<Estado>("parado")

  async function copiar() {
    try {
      await navigator.clipboard.writeText(cnpj.replace(/\D/g, ""))
      setEstado("copiado")
    } catch {
      setEstado("falhou")
    }
  }

  return (
    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
      <span className="select-all font-semibold tabular-nums">{cnpj}</span>
      <button
        type="button"
        onClick={copiar}
        className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-primary-foreground/40 px-4 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
      >
        {estado === "copiado" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {estado === "copiado" ? "CNPJ copiado" : "Copiar CNPJ"}
      </button>
      <span className="sr-only" aria-live="polite">
        {estado === "copiado" ? "CNPJ copiado" : ""}
      </span>
      {estado === "falhou" && (
        <p className="w-full text-sm text-primary-foreground/80" role="status">
          Não foi possível copiar. Selecione o número acima e copie manualmente.
        </p>
      )}
    </div>
  )
}
