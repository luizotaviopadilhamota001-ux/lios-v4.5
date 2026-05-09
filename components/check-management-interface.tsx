"use client"

import { Check, AlertCircle, Clock, TrendingUp } from "lucide-react"

export function CheckManagementInterface() {
  const checks = [
    {
      id: 1,
      client: "João Silva",
      amount: "R$ 2.500,00",
      dueDate: "15/05/2026",
      status: "compensado",
    },
    {
      id: 2,
      client: "Maria Santos",
      amount: "R$ 1.800,00",
      dueDate: "20/05/2026",
      status: "pendente",
    },
    {
      id: 3,
      client: "Pedro Costa",
      amount: "R$ 3.200,00",
      dueDate: "10/05/2026",
      status: "atrasado",
    },
    {
      id: 4,
      client: "Ana Oliveira",
      amount: "R$ 950,00",
      dueDate: "25/05/2026",
      status: "pendente",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "compensado":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      case "pendente":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20"
      case "atrasado":
        return "bg-red-500/10 text-red-400 border-red-500/20"
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "compensado":
        return "Compensado"
      case "pendente":
        return "Pendente"
      case "atrasado":
        return "Atrasado"
      default:
        return status
    }
  }

  const totalValue = checks.reduce((acc, check) => {
    const value = parseFloat(check.amount.replace("R$ ", "").replace(".", "").replace(",", "."))
    return acc + value
  }, 0)

  const compensados = checks.filter(c => c.status === "compensado").length
  const pendentes = checks.filter(c => c.status === "pendente").length
  const atrasados = checks.filter(c => c.status === "atrasado").length

  return (
    <div className="bg-[#1e3a5f] rounded-2xl p-6 border border-[#2d5a8f]/30 shadow-2xl shadow-black/40 w-full">
      {/* Header Metrics */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="bg-[#2d5a8f]/40 rounded-xl p-3 border border-[#3d7aaf]/20">
          <div className="text-xs text-gray-300 mb-1">Total</div>
          <div className="text-lg font-bold text-amber-400">R$ {totalValue.toFixed(2).replace(".", ",")}</div>
        </div>
        <div className="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/20">
          <div className="text-xs text-emerald-300 mb-1">Compensados</div>
          <div className="text-lg font-bold text-emerald-400">{compensados}</div>
        </div>
        <div className="bg-amber-500/10 rounded-xl p-3 border border-amber-500/20">
          <div className="text-xs text-amber-300 mb-1">Pendentes</div>
          <div className="text-lg font-bold text-amber-400">{pendentes}</div>
        </div>
        <div className="bg-red-500/10 rounded-xl p-3 border border-red-500/20">
          <div className="text-xs text-red-300 mb-1">Atrasados</div>
          <div className="text-lg font-bold text-red-400">{atrasados}</div>
        </div>
      </div>

      {/* Checks List */}
      <div className="space-y-2 mb-4">
        {checks.map((check) => (
          <div
            key={check.id}
            className="bg-[#2d5a8f]/20 rounded-lg p-3 border border-[#3d7aaf]/30 hover:border-[#4d9adf]/50 hover:bg-[#2d5a8f]/30 transition-all group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="text-sm font-medium text-white mb-0.5">{check.client}</div>
                <div className="text-xs text-gray-400">{check.dueDate}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-bold text-amber-400">{check.amount}</div>
                </div>
                <div
                  className={`px-3 py-1 rounded-lg text-xs font-medium border ${getStatusColor(check.status)}`}
                >
                  {getStatusLabel(check.status)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Footer */}
      <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 rounded-lg p-3 border border-amber-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-amber-400" />
          <span className="text-sm text-gray-200">
            <span className="text-amber-400 font-semibold">{checks.length}</span> cheques registrados
          </span>
        </div>
        <div className="text-xs text-gray-400">Última atualização: Agora</div>
      </div>
    </div>
  )
}
