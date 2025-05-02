import { ProductCategory } from "@/shared/types/product"
import Hero from "./ui/hero"
import { ProductCategories } from "@/shared/layers/categories"
import { Inviting } from "@/shared/layers/inviting"
import Products from "./ui/products"

export function generateStaticParams(): Promise<{ slug: ProductCategory }[]> {
  return Promise.resolve([{ slug: "headphones" }, { slug: "speakers" }, { slug: "earphones" }])
}

export default async function Page({ params }: { params: Promise<{ slug: ProductCategory }> }) {
  const { slug } = await params

  return (
    <main className="mb-32 flex flex-col gap-32">
      <Hero slug={slug} />
      <Products slug={slug} className="flex flex-col gap-32" />
      <ProductCategories />
      <Inviting />
    </main>
  )
}
