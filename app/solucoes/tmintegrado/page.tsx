import type { Metadata } from "next"
import { ProductTemplate } from "@/components/product-template"
import { tmIntegrado } from "@/src/data/produtos"

export const revalidate = 300

export const metadata: Metadata = {
  title: "TmIntegrado: estoque, vendas, finanças e ordem de serviço",
  description: tmIntegrado.resumo,
}

export default function Page() {
  return <ProductTemplate produto={tmIntegrado} />
}
