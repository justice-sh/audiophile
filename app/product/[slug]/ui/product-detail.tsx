"use client"

import { Image } from "@/shared/components/image"
import { PageLayer } from "@/shared/components/page-layer"
import { Product } from "@/shared/types/product"
import { formatPrice } from "@/shared/utils/price"
import { Button } from "@/shared/components/ui/button"
import { Counter } from "@/shared/components/counter"
import { cn } from "@/shared/lib/utils"
import { cartStore, useCartItem } from "@/shared/data/cart-store"

export const ProductDetail = ({ product, className }: { product: Product; className?: string }) => {
  return (
    <PageLayer
      className={cn("md-9:grid-cols-[540px_1fr] md-5:grid-cols-[350px_1fr] md-3:grid-cols-[240px_1fr] md-3:gap-6 grid gap-14", className)}
    >
      <div className="bg-app-gray-102 md-3:h-[560px] relative grid h-[327px] place-items-center overflow-hidden rounded-md">
        <Image
          src={product.categoryImage.desktop.replace("./", "/")}
          width={540}
          height={560}
          alt=""
          className="max-md-3:w-[300px] absolute h-auto"
        />
      </div>

      <div className="flex items-center justify-center">
        <Content product={product} />
      </div>
    </PageLayer>
  )
}

const Content = ({ product }: { product: Product }) => {
  const cartItem = useCartItem(product.id)

  const quantity = cartItem ? cartItem.quantity : 1

  const subTitle = product.new ? "New Product" : ""

  const handleCounterChange = (value: number) => {
    cartStore.trigger.set({ ...product, quantity: value })
  }

  const handleAddToCart = () => handleCounterChange(quantity)

  return (
    <div className="flex max-w-[398px] flex-col gap-8">
      <div className="space-y-4">
        {subTitle && <p className="app-text-overline max-xs-5:text-xs text-app-orange-102">{subTitle}</p>}
        <h2 className="max-sm-8:app-text-h4">{product.name}</h2>
      </div>
      <p className="text-black/50">{product.description}</p>
      <h6 className="text-black">{formatPrice(product.price, "USD")}</h6>
      <div className="flex w-full max-w-[300px] flex-wrap items-center gap-5 [&>*]:flex-1">
        <Counter label="" value={quantity} minValue={1} maxValue={20} onDecrement={handleCounterChange} onIncrement={handleCounterChange} />

        <Button onClick={handleAddToCart} disabled={Boolean(cartItem)} className="text-xs">
          Add to cart
        </Button>
      </div>
    </div>
  )
}
