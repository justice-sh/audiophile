"use client"

import { Image } from "@/shared/components/image"
import { PageLayer } from "@/shared/components/page-layer"
import { Product } from "@/shared/types/product"
import { formatPrice } from "@/shared/utils/price"
import { Button } from "@/shared/components/ui/button"
import { useState } from "react"
import { Counter } from "@/shared/components/counter"

export const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <PageLayer className="md-8:grid-cols-[540px_1fr] md-3:grid-cols-2 md-3:gap-6 grid gap-14">
      <div className="bg-app-gray-102 md-3:h-[560px] relative grid h-[352px] place-items-center rounded-md">
        <Image src={product.categoryImage.desktop.replace("./", "/")} fill alt="" className="max-h-full" />
      </div>

      <div className="flex items-center justify-center">
        <Content product={product} />
      </div>
    </PageLayer>
  )
}

const Content = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1)

  const subTitle = product.new ? "New Product" : ""

  return (
    <div className="max-md-3:items-center max-md-3:text-center flex max-w-[398px] flex-col gap-8">
      <div className="space-y-4">
        {subTitle && <p className="app-text-overline max-xs-5:text-xs text-app-orange-102">{subTitle}</p>}
        <h2 className="max-sm-8:app-text-h4">{product.name}</h2>
      </div>
      <p className="md-3:pr-5 text-black/50">{product.description}</p>
      <h6 className="md-3:pr-5 text-black">{formatPrice(product.price, "USD")}</h6>
      <div className="flex gap-5">
        <Counter label="" value={quantity} minValue={1} maxValue={10} onDecrement={setQuantity} onIncrement={setQuantity} />
        <Button className="text-xs">Add to cart</Button>
      </div>
    </div>
  )
}
