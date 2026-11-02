import type { Metadata } from "next"
import { ProductTemplate } from "@/components/product-template"
import { tmCheque } from "@/src/data/produtos"

export const revalidate = 300

export const metadata: Metadata = {
  title: "TmCheque: programa para preencher cheques",
  description: tmCheque.resumo,
}

export default function Page() {
  return <ProductTemplate produto={tmCheque} />
}
