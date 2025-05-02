import { getProductBySlug, getProductSlugs } from "@/shared/data"
import { BackButton } from "./ui/back-button"
import { ProductDetail } from "./ui/product-detail"
import { ProductFeatures } from "./ui/product-features"
import { ProductGallery } from "./ui/product-gallery"

export function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getProductSlugs()
  return Promise.resolve(slugs.map((slug) => ({ slug })))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const product = getProductBySlug(slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <main className="my-14 flex flex-col gap-20">
      <BackButton />
      <ProductDetail product={product} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
    </main>
  )
}
