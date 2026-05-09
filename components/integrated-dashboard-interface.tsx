"use client"

import { TrendingUp, DollarSign, ShoppingCart, Clock, FileText, CheckCircle2, AlertCircle } from "lucide-react"

export function IntegratedDashboardInterface() {
  const modules = [
    { icon: DollarSign, label: "Financeiro", value: "R$ 45.230", color: "from-blue-500 to-blue-600" },
    { icon: ShoppingCart, label: "Vendas", value: "128 ops", color: "from-emerald-500 to-emerald-600" },
    { icon: Clock, label: "Ponto", value: "8h 30m", color: "from-amber-500 to-amber-600" },
    { icon: FileText, label: "Cheques", value: "12 pend.", color: "from-rose-500 to-rose-600" },
  ]

  const activities = [
    { time: "14:32", action: "Venda registrada", value: "+R$ 245,90" },
    { time: "14:15", action: "Cheque compensado", value: "R$ 1.500,00" },
    { time: "13:48", action: "Ponto marcado", value: "Entrada" },
    { time: "13:22", action: "Pagamento proc.", value: "-R$ 320,00" },
  ]

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-2xl border border-blue-800/40 p-6 shadow-2xl overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">Dashboard</h3>
            <p className="text-xs text-blue-300/60">Sistema Integrado</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs text-emerald-300">Online</span>
          </div>
        </div>

        {/* Module Cards Grid */}
        <div className="grid grid-cols-2 gap-3">
          {modules.map((module, idx) => {
            const Icon = module.icon
            return (
              <div key={idx} className="bg-slate-800/60 backdrop-blur-sm rounded-lg border border-slate-700/60 p-3 hover:border-yellow-500/30 transition-colors group">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${module.color} p-1.5 group-hover:shadow-lg group-hover:shadow-yellow-400/20 transition-all`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <span className="text-xs text-slate-300">{module.label}</span>
                </div>
                <p className="text-sm font-semibold text-white">{module.value}</p>
              </div>
            )
          })}
        </div>

        {/* Activity Timeline */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Atividades</p>
          <div className="space-y-2 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800">
            {activities.map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs bg-slate-800/40 rounded-lg p-2 border border-slate-700/30">
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-slate-500 font-mono">{activity.time}</span>
                  <span className="text-slate-300">{activity.action}</span>
                </div>
                <span className={`font-semibold ${activity.value.startsWith("+") ? "text-emerald-400" : activity.value.startsWith("-") ? "text-rose-400" : "text-blue-300"}`}>
                  {activity.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-700/40">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <div>
              <p className="text-xs text-slate-400">Operações</p>
              <p className="text-sm font-bold text-white">1.247</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-400" />
            <div>
              <p className="text-xs text-slate-400">Pendências</p>
              <p className="text-sm font-bold text-white">23</p>
            </div>
          </div>
        </div>
      </div>

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20" />
    </div>
  )
}
