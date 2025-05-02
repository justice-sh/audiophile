import { PageLayer } from "@/shared/components/page-layer"
import { IncludedItem, Product } from "@/shared/types/product"

export function ProductFeatures({ product }: { product: Product }) {
  const featureList = product.features.split("\n").map((feature, index) => (
    <li key={index} className="text-sm text-gray-500 dark:text-gray-400">
      {feature}
    </li>
  ))

  return (
    <PageLayer className="flex justify-between gap-20">
      <div className="flex w-full max-w-[635px] flex-col gap-6">
        <h4 className="text-black">FEATURES</h4>

        <ul className="flex flex-col gap-4">{featureList}</ul>
      </div>

      <div className="flex w-full max-w-[350px] flex-col gap-6">
        <h4 className="text-black">IN THE BOX</h4>

        <div className="">
          {product.includes.map((item, index) => (
            <IncludedItemEl item={item} key={index} />
          ))}
        </div>
      </div>
    </PageLayer>
  )
}

const IncludedItemEl = ({ item }: { item: IncludedItem }) => {
  return (
    <div className="grid grid-cols-[30px_1fr]">
      <p className="text-app-orange-102">{item.quantity}x</p>
      <p className="">{item.item}</p>
    </div>
  )
}
