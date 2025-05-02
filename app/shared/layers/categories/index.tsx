import { PageLayer } from "@/shared/components/page-layer"
import { cn } from "@/shared/lib/utils"
import earphone from "./assets/earphone.webp"
import headphone from "./assets/headphone.webp"
import speaker from "./assets/speaker.webp"
import { routes } from "@/shared/constants/routes"
import { CategoryItem } from "./ui/category-item"

export const ProductCategories = ({ className }: { className?: string }) => {
  return (
    <section className="layer-container">
      <PageLayer className={cn("grid items-end gap-7", "sm-7:grid-cols-2 md-3:grid-cols-3", className)}>
        <CategoryItem image={{ src: headphone, width: 122, height: 160 }} title="Headphones" href={routes.category("headphones")} />
        <CategoryItem image={{ src: speaker, width: 121, height: 146 }} title="Speakers" href={routes.category("speakers")} />
        <CategoryItem image={{ src: earphone, width: 125, height: 126 }} title="Earphones" href={routes.category("earphones")} />
      </PageLayer>
    </section>
  )
}
