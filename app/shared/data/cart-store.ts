import { createStore } from "@xstate/store"
import { useSelector } from "@xstate/store/react"
import { CartItem } from "../types/cart"

type ID = CartItem["id"]

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

export const useCartSum = () => {
  const items = useSelector(cartStore, (state) => state.context.items)

  const total = Object.values(items).reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = total ? 50 : 0
  const vat = (total * 7.5) / 100
  const grandTotal = total + shipping + vat

  return {
    total,
    shipping,
    vat,
    grandTotal,
  }
}

export const useCartItem = (id: ID): CartItem | undefined => {
  return useSelector(cartStore, (state) => state.context.items[id])
}

export const useViewCart = () => {
  return useSelector(cartStore, (state) => state.context.shouldOpen)
}
