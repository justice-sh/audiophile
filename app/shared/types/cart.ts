import { ImageSet } from "./product"

type CartItemID = string | number

export type CartItem = {
  id: CartItemID
  name: string
  price: number
  quantity: number
  image: ImageSet
}
