// src/hooks/usePlano.ts
import { useEffect, useState } from "react"
import { supabase } from "@/src/lib/supabase"

export function usePlano(slug: string) {
  const [plano, setPlano] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    async function carregar() {
      try {
        const { data, error } = await supabase
          .from("planos")
          .select("*")
          .eq("slug", slug)
          .single()

        if (error) {
          console.error(`Erro ao carregar plano ${slug}:`, error)
          setError(error)
        } else {
          setPlano(data)
        }
      } catch (err) {
        console.error("Erro inesperado:", err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    carregar()
  }, [slug])

  return { plano, loading, error }
}