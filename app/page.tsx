import { HomeHero } from "./home/ui/hero"
import { HomeSamples } from "./home/ui/samples"
import { ProductCategories } from "./layers/categories"
import { Inviting } from "./layers/inviting"

export default function Home() {
  return (
    <main className="max-md-7:*:mb-[96px]">
      <HomeHero className="md-7:mb-[120px]" />
      <ProductCategories className="md-7:mb-[168px]" />
      <HomeSamples className="md-7:mb-[198px]" />
      <Inviting className="md-7:mb-[195px]" />
    </main>
  )
}
