import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <div className="">
        <h2 className="text-4xl font-black">Consumo</h2>

        <div className="space-y-3 mt-10">
          {order.map( item => (
            <div
              className="flex justify-between items-center border-t border-slate-300 py-5 last-of-type:border-b" 
              key={item.id}
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency( item.price )}
                </p>
                <p className="font-black">
                  Cantidad: {item.quantity} - {formatCurrency( item.price * item.quantity )}
                </p>
              </div>
              <button
                className="bg-red-500 text-white font-black h-8 w-8 rounded-full"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
    </div>
  )
}
