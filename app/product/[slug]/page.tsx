import { ProductCategories } from "@/shared/layers/categories"
import { Inviting } from "@/shared/layers/inviting"
import { getProductBySlug, getProductSlugs } from "@/shared/data/product"
import { ProductDetail } from "./ui/product-detail"
import { ProductFeatures } from "./ui/product-features"
import { ProductGallery } from "./ui/product-gallery"
import { ProductRelated } from "./ui/product-related"
import { PageLayer } from "@/shared/components/page-layer"
import { BackButton } from "@/shared/components/back-button"

export function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getProductSlugs()
  return Promise.resolve(slugs.map((slug) => ({ slug })))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const product = getProductBySlug(slug)

  if (!product) return <EmptyPage />

  return (
    <Layout>
      <ProductDetail product={product} />
      <ProductFeatures product={product} />
      <ProductGallery product={product} />
      <ProductRelated products={product.others} />
    </Layout>
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="layer-container mt-14 mb-32 flex flex-col gap-32">
      <BackButton className="-mb-20" />
      {children}
      <ProductCategories withContainer={false} />
      <Inviting withContainer={false} />
    </main>
  )
}

const EmptyPage = () => {
  return (
    <Layout>
      <PageLayer className="my-10 grid place-items-center">
        <h4>Product not found</h4>
      </PageLayer>
    </Layout>
  )
}
