import type { Metadata } from "next"
import { ProductTemplate } from "@/components/product-template"
import { tmPonto } from "@/src/data/produtos"

export const revalidate = 300

export const metadata: Metadata = {
  title: "TmPonto: controle de ponto eletrônico",
  description: tmPonto.resumo,
}

export default function Page() {
  return <ProductTemplate produto={tmPonto} />
}
