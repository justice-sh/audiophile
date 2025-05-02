import { Image } from "@/shared/components/image"
import { PageLayer } from "@/shared/components/page-layer"
import { cn } from "@/shared/lib/utils"
import { ImageSet, Product } from "@/shared/types/product"

export function ProductGallery({ product }: { product: Product }) {
  return (
    <PageLayer className="grid h-[592px] grid-cols-[445px_1fr] gap-10">
      <GalleryImage src={product.gallery.first} className="" />
      <GalleryImage src={product.gallery.third} className="row-span-2" />
      <GalleryImage src={product.gallery.second} className="" />
    </PageLayer>
  )
}

const GalleryImage = ({ src, className }: { src: ImageSet; className?: string }) => {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <Image src={src.desktop.replace("./", "/")} alt="" fill className="rounded-inherit object-cover" />
    </div>
  )
}
