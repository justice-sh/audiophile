import { ReactNode } from "react"
import { Image } from "./image"
import { CartItem } from "../types/cart"
import { formatPrice } from "../utils/price"
import { cn } from "../lib/utils"

type CartItemLayoutProps = {
  item: CartItem
  children?: ReactNode
  className?: string
}

export function CartItemLayout({ children, item, className }: CartItemLayoutProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      <div className="grid flex-1 grid-cols-[64px_1fr] gap-4">
        <div className="bg-app-gray-102 relative grid size-[64px] place-items-center overflow-hidden rounded-lg">
          <Image src={item.image.mobile} height={60} width={60} className="absolute" alt="" />
        </div>

        <div className="@container flex flex-col justify-around">
          <p className="truncate font-bold uppercase">{item.name}</p>
          <p className="text-black/60">{formatPrice(item.price)}</p>
        </div>
      </div>

      <div>{children}</div>
    </div>
  )
}
