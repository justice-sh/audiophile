import { PageLayer } from "@/shared/components/page-layer"
import { cn } from "@/shared/lib/utils"
import { IncludedItem, Product } from "@/shared/types/product"

export function ProductFeatures({ product, className }: { product: Product; className?: string }) {
  const featureList = product.features.split("\n").map((feature, index) => (
    <li key={index} className="text-sm text-gray-500 dark:text-gray-400">
      {feature}
    </li>
  ))

  return (
    <PageLayer className={cn("md-9:grid-cols-[635px_1fr] grid w-full gap-32", className)}>
      <div className="flex flex-col gap-6">
        <h4 className="text-black">FEATURES</h4>

        <ul className="flex flex-col gap-4">{featureList}</ul>
      </div>

      <div className="@container">
        <div className="@max-sm-5:flex-col flex gap-6">
          <h4 className="text-black">IN THE BOX</h4>

          <div className="@sm-5:mx-auto">
            {product.includes.map((item, index) => (
              <IncludedItemEl item={item} key={index} />
            ))}
          </div>
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
