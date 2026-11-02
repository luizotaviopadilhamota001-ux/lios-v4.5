import type { Metadata } from "next"
import { ProductTemplate } from "@/components/product-template"
import { tmRecibo } from "@/src/data/produtos"

export const revalidate = 300

export const metadata: Metadata = {
  title: "TmRecibo: emissor de recibos",
  description: tmRecibo.resumo,
}

export default function Page() {
  return <ProductTemplate produto={tmRecibo} />
}
