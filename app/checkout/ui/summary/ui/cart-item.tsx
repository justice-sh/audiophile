import { CartItemLayout } from "@/shared/components/cart-item-layout"
import { Counter } from "@/shared/components/counter"
import { cartStore } from "@/shared/data/cart-store"
import { CartItem as CartItemData } from "@/shared/types/cart"

type Props = {
  item: CartItemData
}

export function CartItem({ item }: Props) {
  const handleCounterChange = (value: number) => {
    cartStore.trigger.set({ ...item, quantity: value })
  }

  return (
    <CartItemLayout item={item} className="flex items-center gap-4">
      <p className="font-bold text-black/50">x{item.quantity}</p>
    </CartItemLayout>
  )
}
