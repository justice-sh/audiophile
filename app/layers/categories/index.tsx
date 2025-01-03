import { Image } from "@/app/shared/components/image"
import { PageLayer } from "@/app/shared/components/page-layer"
import { cn } from "@/app/shared/lib/utils"
import Link from "next/link"
import earphone from "./assets/earphone.webp"
import headphone from "./assets/headphone.webp"
import speaker from "./assets/speaker.webp"
import oval from "./assets/oval.png"
import { StaticImageData } from "next/image"
import { routes } from "@/app/shared/constants/routes"
import { ChevronRight } from "lucide-react"

export const ProductCategories = ({ className }: { className?: string }) => {
  return (
    <PageLayer className={cn("grid items-end gap-7", "sm-7:grid-cols-2 md-3:grid-cols-3", className)}>
      <CategoryItem image={{ src: headphone, width: 122, height: 160 }} title="Headphones" href={routes.category("headphones")} />
      <CategoryItem image={{ src: speaker, width: 121, height: 146 }} title="Speakers" href={routes.category("speakers")} />
      <CategoryItem image={{ src: earphone, width: 125, height: 126 }} title="Earphones" href={routes.category("earphones")} />
    </PageLayer>
  )
}

type CategoryItemProps = {
  image: {
    src: string | StaticImageData
    width: number
    height: number
  }
  title: string
  href: string
}

const CategoryItem = ({ image, title, href }: CategoryItemProps) => {
  return (
    <div className="relative flex items-end justify-center" style={{ height: 204 + image.height / 2 }}>
      <div className="absolute top-0 z-10 flex justify-center">
        <Image {...image} className="" placeholder="blur" />
        <Image src={oval} width={122} height={18} className="absolute top-[75%] -z-10" />
      </div>

      <Link
        href={href}
        className="bg-app-gray-102 ring-app-gray-103 group flex h-[204px] w-full cursor-pointer flex-col items-center justify-end gap-4 rounded-lg pb-8"
      >
        <h6 className="text-black">{title}</h6>

        <div className="flex gap-3">
          <p className="text-black/50 transition-colors duration-500 typo-sub-title-none group-hover:text-primary">shop</p>
          <ChevronRight className="text-primary" />
        </div>
      </Link>
    </div>
  )
}
