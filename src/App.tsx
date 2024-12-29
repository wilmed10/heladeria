import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotal from "./components/OrderTotal"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import logo from "/images/logo.png"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5 flex justify-center">
        <img src={logo} alt="logo" className="w-1/3"/>
      </header>
      <main className="flex max-w-7xl mx-auto py-10">
        <div className="p-5 w-2/3">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="mt-10 grid grid-cols-3 gap-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 w-1/3">
          {order.length ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />
              <TipPercentageForm 
                setTip={setTip}
                tip={tip}
              />
              <OrderTotal 
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
      <footer className="bg-teal-400 py-5 flex justify-center">
        <h1 className="text-lg text-white font-semibold">Wilson Medina Arrieta - 2024</h1>
      </footer>
    </>
  )
}

export default App
