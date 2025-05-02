import { Image } from "@/shared/components/image"
import { PageLayer } from "@/shared/components/page-layer"
import { routes } from "@/shared/constants/routes"
// import { cn } from "@/shared/lib/utils"
import { RelatedProduct } from "@/shared/types/product"
import Link from "next/link"

export function ProductRelated({ products }: { products: RelatedProduct[] }) {
  return (
    <PageLayer className="grid h-[592px] grid-cols-[445px_1fr] gap-10">
      {products.map((product) => (
        <RelatedProductDetail key={product.slug} product={product} />
      ))}
    </PageLayer>
  )
}

const RelatedProductDetail = ({ product }: { product: RelatedProduct }) => {
  return (
    <PageLayer className="md-3:grid-cols-2 md-3:gap-6 grid gap-14">
      <div className="bg-app-gray-102 md-3:h-[560px] relative grid h-[352px] place-items-center rounded-md">
        <Image src={product.image.desktop.replace("./", "/")} fill alt="" className="max-h-full" />
      </div>

      <div className="flex items-center justify-center">
        <Content product={product} />
      </div>
    </PageLayer>
  )
}

const Content = ({ product }: { product: RelatedProduct }) => {
  return (
    <div className="max-md-3:items-center max-md-3:text-center flex max-w-[398px] flex-col gap-8">
      <h2 className="max-sm-8:app-text-h4">{product.name}</h2>

      <Link href={routes.product(product.slug)} className="btn-size-lg btn btn-variant-default mt-6 w-fit">
        See Product
      </Link>
    </div>
  )
}
