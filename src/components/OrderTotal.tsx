import { useCallback, useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotal({order, tip, placeOrder}: OrderTotalProps) {

  const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order])
  const tipAmount = useCallback(() => subtotalAmount * tip, [tip, subtotalAmount])
  const totalAmount = useMemo(() => subtotalAmount + tipAmount(),[tipAmount, subtotalAmount])
  // useMemo y useCallback son similares, pero el primero se usa para valores y el segundo para funciones. Por lo q la sintaxis es diferente.

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y propinas</h2>
            <p>Subtotal a pagar: {''}
              <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina: {''}
              <span className="font-bold">{formatCurrency(tipAmount())}</span>
            </p>
            <p>Total a pagar: {''}
              <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>
        <button
          className="w-full bg-black text-white p-3 uppercase font-bold mt-10 disabled:opacity-10"
          disabled={totalAmount === 0}
          onClick={placeOrder}
        >
          Guardar Orden
        </button>
    </>
  )
}
