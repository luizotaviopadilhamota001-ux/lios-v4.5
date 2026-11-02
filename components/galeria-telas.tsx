"use client"

import Image from "next/image"
import { useState } from "react"
import type { Tela } from "@/src/data/produtos"

export function GaleriaTelas({ telas }: { telas: Tela[] }) {
  const [ativa, setAtiva] = useState(0)
  const tela = telas[ativa]

  return (
    <div>
      <div className="flex min-h-[16rem] items-center justify-center rounded-lg bg-muted p-4 md:p-8">
        <Image
          key={tela.src}
          src={tela.src}
          alt={tela.alt}
          width={tela.width}
          height={tela.height}
          sizes="(min-width: 1024px) 800px, 100vw"
          className="h-auto w-full rounded shadow-lg"
          style={{ maxWidth: tela.width }}
        />
      </div>

      <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
        {tela.alt}
      </p>

      {telas.length > 1 && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {telas.map((item, indice) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setAtiva(indice)}
              aria-pressed={indice === ativa}
              aria-label={`Ver tela: ${item.alt}`}
              className={`overflow-hidden rounded border-2 bg-muted transition-colors ${
                indice === ativa ? "border-primary" : "border-border hover:border-primary/50"
              }`}
            >
              <Image
                src={item.src}
                alt=""
                width={item.width}
                height={item.height}
                sizes="(min-width: 640px) 200px, 50vw"
                className="h-24 w-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
