"use client"

import { Clock, LogIn, LogOut, Coffee } from "lucide-react"

export function TimeTrackingInterface() {
  const employees = [
    { id: 1, name: "João Silva", status: "Trabalhando", entry: "08:00", hours: "2h 35m", statusColor: "#10b981" },
    { id: 2, name: "Maria Santos", status: "Pausa", entry: "09:30", hours: "1h 15m", statusColor: "#f59e0b" },
    { id: 3, name: "Carlos Oliveira", status: "Encerrado", entry: "08:00", exit: "17:00", hours: "8h 50m", statusColor: "#6b7280" },
  ]

  const metrics = [
    { label: "Trabalhando", value: "12", color: "#10b981" },
    { label: "Em Pausa", value: "3", color: "#f59e0b" },
    { label: "Encerrado", value: "8", color: "#6b7280" },
  ]

  return (
    <div className="bg-[#1e3a5f] rounded-2xl p-6 shadow-2xl border border-[#2a4a73] h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2a4a73]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-[#f59e0b] text-xs font-semibold uppercase tracking-wide">Expediente</p>
            <p className="text-[#c5d3e0] text-sm font-medium">Hoje, 16 de setembro</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[#c5d3e0] text-xs">14:35</p>
          <p className="text-[#10b981] text-xs font-semibold">ATIVO</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-[#2a4a73]/40 rounded-lg p-3 text-center">
            <p className="text-[#9ca3af] text-xs uppercase tracking-wide">{metric.label}</p>
            <p className="text-xl font-bold" style={{ color: metric.color }}>
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Employees List */}
      <div className="flex-1 overflow-y-auto mb-6 space-y-2">
        {employees.map((emp) => (
          <div key={emp.id} className="bg-[#2a4a73]/40 rounded-lg p-3 hover:bg-[#2a4a73]/60 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[#e5e7eb] text-sm font-medium">{emp.name}</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: emp.statusColor }} />
                <span className="text-xs font-semibold" style={{ color: emp.statusColor }}>
                  {emp.status}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-[#9ca3af]">
              <div className="flex gap-4">
                <span className="flex items-center gap-1">
                  <LogIn className="w-3 h-3" /> {emp.entry}
                </span>
                {emp.exit && (
                  <span className="flex items-center gap-1">
                    <LogOut className="w-3 h-3" /> {emp.exit}
                  </span>
                )}
              </div>
              <span className="text-[#f59e0b] font-semibold">{emp.hours}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#d97706] hover:to-[#f59e0b] text-[#1e3a5f] font-bold py-3 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2">
          <Clock className="w-5 h-5" />
          Registrar Ponto
        </button>
        <button className="w-full bg-[#2a4a73] hover:bg-[#374151] text-[#c5d3e0] font-semibold py-2 rounded-lg transition-colors border border-[#3f5975] flex items-center justify-center gap-2">
          <Coffee className="w-4 h-4" />
          Marcar Pausa
        </button>
      </div>

      {/* Footer Info */}
      <div className="mt-4 text-center text-[#6b7280] text-xs space-y-1">
        <p>23 funcionários cadastrados</p>
        <p className="text-[#4b5563]">Sistema TmPonto v2.0</p>
      </div>
    </div>
  )
}
