import { ReactNode } from "react"
import { Image } from "./image"
import { CartItem } from "../types/cart"
import { formatPrice } from "../utils/price"

type CartItemLayoutProps = {
  item: CartItem
  children?: ReactNode
}

export function CartItemLayout({ children, item }: CartItemLayoutProps) {
  return (
    <div className="xs-5:grid-cols-[1fr_96px] grid gap-2">
      <div className="grid grid-cols-[64px_1fr] gap-4">
        <div className="bg-app-gray-102 relative grid size-[64px] place-items-center overflow-hidden rounded-lg">
          <Image src={item.image.mobile} height={60} width={60} className="absolute" alt="" />
        </div>

        <div className="@container flex flex-col justify-around">
          <p className="truncate font-bold uppercase">{item.name}</p>
          <p className="text-black/60">{formatPrice(item.price)}</p>
        </div>
      </div>

      <div className="flex items-center">{children}</div>
    </div>
  )
}
