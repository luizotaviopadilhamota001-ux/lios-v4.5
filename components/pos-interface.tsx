"use client"

import { ShoppingCart, X } from "lucide-react"

export function POSInterface() {
  const items = [
    { name: "Coca-Cola 2L", price: 8.90, quantity: 1 },
    { name: "X-Burger Premium", price: 24.90, quantity: 2 },
    { name: "Salgado Queijo", price: 5.50, quantity: 3 },
  ]

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discount = 0
  const total = subtotal - discount

  return (
    <div className="bg-[#1e3a5f] rounded-2xl p-6 shadow-2xl border border-[#2a4a73] h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2a4a73]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-[#f59e0b] text-xs font-semibold uppercase tracking-wide">Caixa #01</p>
            <p className="text-[#c5d3e0] text-sm font-medium">Operador: Admin</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[#c5d3e0] text-xs">14:35</p>
          <p className="text-[#f59e0b] text-xs font-semibold">ONLINE</p>
        </div>
      </div>

      {/* Items List */}
      <div className="flex-1 overflow-y-auto mb-6">
        <div className="space-y-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2a4a73]/40 rounded-lg p-3 flex items-center justify-between group hover:bg-[#2a4a73]/60 transition-colors"
            >
              <div className="flex-1">
                <p className="text-[#e5e7eb] text-sm font-medium">{item.name}</p>
                <p className="text-[#9ca3af] text-xs">
                  {item.quantity}x R$ {item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-[#f59e0b] font-bold min-w-[60px] text-right">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </p>
                <button className="text-[#6b7280] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Totals Section */}
      <div className="space-y-3 pb-6 border-b border-[#2a4a73]">
        <div className="flex justify-between text-[#9ca3af] text-sm">
          <span>Subtotal:</span>
          <span>R$ {subtotal.toFixed(2)}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-[#10b981] text-sm font-medium">
            <span>Desconto:</span>
            <span>-R$ {discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between items-center pt-2">
          <span className="text-[#c5d3e0] font-semibold">Total:</span>
          <div className="text-right">
            <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">
              R$ {total.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] hover:from-[#d97706] hover:to-[#f59e0b] text-[#1e3a5f] font-bold py-3 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg">
          Finalizar Venda
        </button>
        <button className="px-4 bg-[#2a4a73] hover:bg-[#374151] text-[#c5d3e0] font-semibold rounded-lg transition-colors border border-[#3f5975]">
          Cancelar
        </button>
      </div>

      {/* Footer Info */}
      <div className="mt-4 text-center text-[#6b7280] text-xs space-y-1">
        <p>Pronto para processar pagamento</p>
        <p className="text-[#4b5563]">Sistema TmIntegrado v4.2</p>
      </div>
    </div>
  )
}
