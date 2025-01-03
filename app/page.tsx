import { HomeHero } from "./home/ui/hero"
import { ProductCategories } from "./layers/categories"

export default function Home() {
  return (
    <main>
      <HomeHero className="mb-[120px]" />
      <ProductCategories className="mb-[168px]" />
      {/* <div className="mb-[198px]"></div> */}
    </main>
  )
}
