import { HomeHero } from "./home/ui/hero"
import { HomeSamples } from "./home/ui/samples"
import { ProductCategories } from "./layers/categories"

export default function Home() {
  return (
    <main>
      <HomeHero className="mb-[120px]" />
      <ProductCategories className="mb-[168px]" />
      <HomeSamples className="mb-[198px]" />
    </main>
  )
}
