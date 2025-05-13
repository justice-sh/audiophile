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
    <CartItemLayout item={item}>
      <Counter
        label=""
        value={item.quantity}
        minValue={1}
        maxValue={20}
        onDecrement={handleCounterChange}
        onIncrement={handleCounterChange}
        className="w-full min-w-auto"
      />
    </CartItemLayout>
  )
}
