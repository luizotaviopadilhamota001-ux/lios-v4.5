"use client"

import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownLeft, DollarSign } from "lucide-react"

export function FinancialDashboardInterface() {
  const financialMetrics = [
    {
      label: "Receita Total",
      value: "R$ 125.450",
      change: "+12.5%",
      icon: TrendingUp,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      label: "Lucro Mensal",
      value: "R$ 42.300",
      change: "+8.2%",
      icon: DollarSign,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      label: "Entradas",
      value: "R$ 95.200",
      change: "Hoje",
      icon: ArrowUpRight,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      label: "Saídas",
      value: "R$ 52.900",
      change: "-5.1%",
      icon: ArrowDownLeft,
      color: "text-red-400",
      bgColor: "bg-red-400/10",
    },
  ]

  const recentTransactions = [
    { id: 1, description: "Venda - Cliente João", amount: "+R$ 3.500", time: "10:45", status: "Concluída" },
    { id: 2, description: "Fornecedor Sergio", amount: "-R$ 1.200", time: "09:30", status: "Concluída" },
    { id: 3, description: "Recebimento Pix", amount: "+R$ 2.100", time: "08:15", status: "Concluída" },
  ]

  return (
    <div className="w-full max-w-2xl bg-gradient-to-br from-[#1e3a5f] to-[#152a45] rounded-2xl p-6 border border-white/10 shadow-2xl">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-white font-bold text-lg mb-1">Resumo Financeiro</h3>
        <p className="text-white/50 text-sm">Faturamento do dia - 6 de Maio de 2026</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {financialMetrics.map((metric, index) => {
          const IconComponent = metric.icon
          return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className={`w-8 h-8 ${metric.bgColor} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                <IconComponent className={`w-4 h-4 ${metric.color}`} />
              </div>
              <p className="text-white/60 text-xs mb-1">{metric.label}</p>
              <p className="text-white font-bold text-sm mb-1">{metric.value}</p>
              <p className={`text-xs font-semibold ${metric.color}`}>{metric.change}</p>
            </div>
          )
        })}
      </div>

      {/* Mini Chart and Transactions */}
      <div className="grid grid-cols-3 gap-4">
        {/* Mini Chart */}
        <div className="col-span-1 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
          <p className="text-white/60 text-xs mb-2 font-semibold">Fluxo</p>
          <div className="flex items-end justify-around h-16 gap-1">
            {[40, 60, 45, 75, 55, 85, 65].map((height, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-accent to-accent/50 rounded-sm hover:from-accent hover:to-accent transition-all"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
          <p className="text-white/60 text-xs mb-2 font-semibold">Últimas Transações</p>
          <div className="space-y-2">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between text-xs">
                <div className="flex-1">
                  <p className="text-white">{tx.description}</p>
                  <p className="text-white/40">{tx.time}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${tx.amount.includes("+") ? "text-green-400" : "text-red-400"}`}>
                    {tx.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Summary */}
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
        <div>
          <p className="text-white/60 text-xs">Saldo em Caixa</p>
          <p className="text-white font-bold text-lg">R$ 72.550</p>
        </div>
        <div className="text-right">
          <p className="text-accent text-xs font-semibold">↑ 18.5% vs. mês anterior</p>
          <p className="text-white/60 text-xs">Crescimento de receita</p>
        </div>
      </div>
    </div>
  )
}
