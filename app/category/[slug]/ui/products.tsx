import { Image } from "@/shared/components/image"
import { PageLayer } from "@/shared/components/page-layer"
import { routes } from "@/shared/constants/routes"
import { getProductsByCategory } from "@/shared/data/product"
import { cn } from "@/shared/lib/utils"
import { ProductCategory } from "@/shared/types/product"
import Link from "next/link"

export default function CategoryProducts({ slug, className }: { slug: ProductCategory; className?: string }) {
  const products = getProductsByCategory(slug).sort((a, b) => (a.new ? -1 : b.new ? 1 : 0))

  return (
    <PageLayer withContainer className={cn("", className)}>
      {products.map((item, index) => (
        <ProductItem
          key={index}
          image={item.categoryImage.desktop}
          index={index}
          subTitle={item.new ? "New Product" : ""}
          name={item.name}
          description={item.description}
          href={routes.product(item.slug)}
        />
      ))}
    </PageLayer>
  )
}

const ProductItem = ({ image, index, ...content }: { image: string; index: number } & ContentProps) => {
  const isEvenIndex = index % 2 === 0

  const styles = {
    order: isEvenIndex ? "" : "md-3:order-1",
  }

  return (
    <div className="md-8:grid-cols-[540px_1fr] md-3:grid-cols-2 md-3:gap-6 grid gap-14">
      <div className={cn("bg-app-gray-102 md-3:h-[560px] relative grid h-[352px] place-items-center rounded-md", styles.order)}>
        <Image src={image} alt="" width={349} height={386} className="absolute max-h-full" />
      </div>

      <div className="flex items-center justify-center">
        <Content {...content} />
      </div>
    </div>
  )
}

type ContentProps = { subTitle?: string; name: string; description: string; href: string }

const Content = ({ subTitle, name, description, href }: ContentProps) => {
  return (
    <div className="max-md-3:items-center max-md-3:text-center flex max-w-[398px] flex-col gap-4">
      {subTitle && <p className="app-text-overline max-xs-5:text-xs text-app-orange-102">{subTitle}</p>}
      <h2 className="max-sm-8:app-text-h4">{name}</h2>
      <p className="md-3:pr-5 text-black/80">{description}</p>
      <Link href={href} className="btn-size-lg btn btn-variant-default mt-6 w-fit">
        See Product
      </Link>
    </div>
  )
}
