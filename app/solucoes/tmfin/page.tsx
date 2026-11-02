import type { Metadata } from "next"
import { ProductTemplate } from "@/components/product-template"
import { tmFin } from "@/src/data/produtos"

export const revalidate = 300

export const metadata: Metadata = {
  title: "TmFin: controle financeiro",
  description: tmFin.resumo,
}

export default function Page() {
  return <ProductTemplate produto={tmFin} />
}
