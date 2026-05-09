"use client"

import { Printer, Download, Plus, CheckCircle } from "lucide-react"

export function ReceiptInterface() {
  return (
    <div className="w-full max-w-2xl">
      {/* Main Receipt Card */}
      <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0f1d2d] rounded-2xl p-6 border border-white/10 shadow-2xl">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-white/10">
            <div>
              <h3 className="text-sm text-yellow-400/80 font-semibold uppercase tracking-wider">LIOS Soluções</h3>
              <p className="text-xs text-white/50 mt-1">CNPJ: 28.528.421/0001-09</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/50">Recibo Nº</p>
              <p className="text-lg font-bold text-white">0001245</p>
            </div>
          </div>

          {/* Client Info */}
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-white/50 uppercase text-[10px] tracking-wider">Cliente</p>
              <p className="text-white font-medium mt-1">João Silva Empresa Ltda</p>
            </div>
            <div className="text-right">
              <p className="text-white/50 uppercase text-[10px] tracking-wider">Data de Emissão</p>
              <p className="text-white font-medium mt-1">06/05/2026</p>
            </div>
          </div>

          {/* Items */}
          <div className="space-y-2 py-3">
            <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
              <span className="text-white/70">Serviço de Consultoria</span>
              <span className="text-white font-medium">R$ 500,00</span>
            </div>
            <div className="flex items-center justify-between text-xs py-2 border-b border-white/5">
              <span className="text-white/70">Suporte Técnico</span>
              <span className="text-white font-medium">R$ 300,00</span>
            </div>
          </div>

          {/* Total */}
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 rounded-lg p-3 border border-yellow-400/20">
            <div className="flex items-center justify-between">
              <span className="text-white/70 font-medium">Valor Total</span>
              <span className="text-2xl font-bold text-yellow-400">R$ 800,00</span>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 pt-2">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <span className="text-xs text-green-400/80 font-medium">Recibo Emitido</span>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-400 px-3 py-2 rounded-lg transition-colors text-sm font-medium border border-yellow-400/30">
              <Download className="h-4 w-4" />
              Emitir Recibo
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-3 py-2 rounded-lg transition-colors text-sm font-medium border border-white/10">
              <Printer className="h-4 w-4" />
              Imprimir
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="bg-[#1e3a5f]/50 rounded-lg p-3 border border-white/5 text-center">
          <p className="text-white/50 text-xs uppercase tracking-wider">Hoje</p>
          <p className="text-lg font-bold text-yellow-400 mt-1">12</p>
        </div>
        <div className="bg-[#1e3a5f]/50 rounded-lg p-3 border border-white/5 text-center">
          <p className="text-white/50 text-xs uppercase tracking-wider">Pendentes</p>
          <p className="text-lg font-bold text-white mt-1">3</p>
        </div>
        <div className="bg-[#1e3a5f]/50 rounded-lg p-3 border border-white/5 text-center">
          <p className="text-white/50 text-xs uppercase tracking-wider">Mês</p>
          <p className="text-lg font-bold text-white mt-1">342</p>
        </div>
      </div>

      {/* Recent Receipts */}
      <div className="mt-4 bg-[#1e3a5f]/30 rounded-lg p-3 border border-white/5">
        <p className="text-white/70 text-xs uppercase tracking-wider font-medium mb-2">Histórico Recente</p>
        <div className="space-y-1 text-xs">
          <div className="flex items-center justify-between text-white/60">
            <span>#0001244</span>
            <span>06/05 09:30</span>
            <span className="text-green-400">Pago</span>
          </div>
          <div className="flex items-center justify-between text-white/60">
            <span>#0001243</span>
            <span>05/05 14:15</span>
            <span className="text-yellow-400">Pendente</span>
          </div>
        </div>
      </div>
    </div>
  )
}
