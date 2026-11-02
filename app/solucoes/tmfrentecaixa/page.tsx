import type { Metadata } from "next"
import { ProductTemplate } from "@/components/product-template"
import { tmFrenteCaixa } from "@/src/data/produtos"

export const revalidate = 300

export const metadata: Metadata = {
  title: "TmFrenteCaixa: sistema de caixa básico",
  description: tmFrenteCaixa.resumo,
}

export default function Page() {
  return <ProductTemplate produto={tmFrenteCaixa} />
}
