import { Image } from "@/shared/components/image"
import { PageLayer } from "@/shared/components/page-layer"
import { routes } from "@/shared/constants/routes"
import { cn } from "@/shared/lib/utils"
import { RelatedProduct } from "@/shared/types/product"
import Link from "next/link"

export function ProductRelated({ products, className }: { products: RelatedProduct[]; className?: string }) {
  return (
    <PageLayer className={cn("grid place-items-center gap-10", className)}>
      <h4 className="max-sm-7:app-text-h5 text-center">You May Also Like</h4>

      <div className={cn("grid w-full gap-10", "sm-7:grid-cols-2 md-3:grid-cols-3", className)}>
        {products.map((product) => (
          <ProductDetail key={product.slug} product={product} />
        ))}
      </div>
    </PageLayer>
  )
}

const ProductDetail = ({ product }: { product: RelatedProduct }) => {
  return (
    <PageLayer className="flex flex-col items-center justify-center gap-6">
      <div className="bg-app-gray-102 sm-7:h-[318px] relative grid h-[120px] w-full place-items-center overflow-hidden rounded-xl">
        <Image src={product.image.desktop.replace("./", "/")} width={300} height={193} alt="" className="max-sm-7:w-[148px]" />
      </div>

      <h5>{product.name}</h5>

      <Link href={routes.product(product.slug)} className="btn-size-lg btn btn-variant-default w-fit">
        See Product
      </Link>
    </PageLayer>
  )
}
