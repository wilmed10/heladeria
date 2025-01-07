import type { MenuItem } from "../types"

type MenuItemProps = {
    item : MenuItem
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
        className="border-2 border-black-50 p-3 flex flex-col items-center hover:scale-105"
        onClick={() => addItem(item)}
    >
        <img src={`./images/${item.img}.webp`} alt={item.name}/>
        <p className="text-xl">{item.name}</p>
        <p className="font-black text-lg">${item.price}</p>
    </button>
  )
}
