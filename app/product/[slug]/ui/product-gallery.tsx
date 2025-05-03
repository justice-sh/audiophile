import { Image } from "@/shared/components/image"
import { PageLayer } from "@/shared/components/page-layer"
import { cn } from "@/shared/lib/utils"
import { ImageSet, Product } from "@/shared/types/product"

export function ProductGallery({ product, className }: { product: Product; className?: string }) {
  return (
    <PageLayer className={cn("md-8:grid-cols-[445px_1fr] sm-8:grid-cols-2 grid gap-10", className)}>
      <GalleryImage src={product.gallery.first} className="max-sm-8:h-[174px]" />
      <GalleryImage src={product.gallery.third} className="md-8:h-[592px] max-sm-8:order-5 sm-8:row-span-2 h-[400px]" />
      <GalleryImage src={product.gallery.second} className="max-sm-8:h-[174px]" />
    </PageLayer>
  )
}

const GalleryImage = ({ src, className }: { src: ImageSet; className?: string }) => {
  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <Image src={src.desktop.replace("./", "/")} alt="" width={540} height={560} className="rounded-inherit absolute size-full" />
    </div>
  )
}
