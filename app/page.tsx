import { HomeHero } from "./home/ui/hero"
import { HomeSamples } from "./home/ui/samples"
import { ProductCategories } from "./layers/categories"
import { Inviting } from "./layers/inviting"

export default function Home() {
  return (
    <main>
      <HomeHero className="mb-[120px]" />
      <ProductCategories className="mb-[168px]" />
      <HomeSamples className="mb-[198px]" />
      <Inviting className="mb-[195px]" />
    </main>
  )
}
