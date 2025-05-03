import { createStore } from "@xstate/store"
import { useSelector } from "@xstate/store/react"
import { ImageSet } from "../types/product"

type ID = string | number

type CartItem = {
  id: ID
  name: string
  price: number
  quantity: number
  image: ImageSet
}

export const cartStore = createStore({
  context: { items: {} as { [id: ID]: CartItem }, shouldOpen: false },

  on: {
    set: (context, event: CartItem) => {
      const items = { ...context.items, [event.id]: event }

      if (items[event.id].quantity <= 0) delete items[event.id]

      return { ...context, items }
    },
    clear: (context) => {
      context.items = {}
      return { ...context }
    },
    openCart: (context) => {
      context.shouldOpen = true
      return { ...context }
    },
    closeCart: (context) => {
      context.shouldOpen = false
      return { ...context }
    },
  },
})

export const useCartItems = () => {
  const items = useSelector(cartStore, (state) => state.context.items)
  return Object.values(items)
}

export const useCartGrandTotal = () => {
  const items = useSelector(cartStore, (state) => state.context.items)
  return Object.values(items).reduce((total, item) => total + item.price * item.quantity, 0)
}

export const useCartItem = (id: ID): CartItem | undefined => {
  const items = useSelector(cartStore, (state) => state.context.items)
  return items[id] ?? undefined
}

export const useViewCart = () => {
  return useSelector(cartStore, (state) => state.context.shouldOpen)
}
