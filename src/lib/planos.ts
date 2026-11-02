import { createClient } from "@supabase/supabase-js"

// Mantenha igual ao `revalidate` exportado pelas páginas que mostram preço.
const REVALIDAR_SEGUNDOS = 300
const LIMITE_MS = 5000

export async function buscarPreco(slug: string): Promise<number | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const chave = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !chave) {
    console.error("Supabase não configurado: defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY")
    return null
  }

  try {
    const supabase = createClient(url, chave, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) =>
          fetch(input, {
            ...init,
            next: { revalidate: REVALIDAR_SEGUNDOS },
            signal: AbortSignal.timeout(LIMITE_MS),
          }),
      },
    })

    const { data, error } = await supabase
      .from("planos")
      .select("preco")
      .eq("slug", slug)
      .single()

    if (error) {
      console.error(`Erro ao carregar o preço de ${slug}:`, error.message)
      return null
    }

    const preco = Number(data?.preco)
    return data?.preco === null || Number.isNaN(preco) ? null : preco
  } catch (erro) {
    console.error(`Erro inesperado ao carregar o preço de ${slug}:`, erro)
    return null
  }
}

export function formatarPreco(preco: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(preco)
}
