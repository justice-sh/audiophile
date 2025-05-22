import { CartItemLayout } from "@/shared/components/cart-item-layout"
import { CartItem as CartItemData } from "@/shared/types/cart"

type Props = {
  item: CartItemData
}

export function CartItem({ item }: Props) {
  return (
    <CartItemLayout item={item} className="flex items-center gap-4">
      <p className="font-bold text-black/50">x{item.quantity}</p>
    </CartItemLayout>
  )
}
