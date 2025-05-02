import { Image } from "@/shared/components/image"
import { PageLayer } from "@/shared/components/page-layer"
import Link from "next/link"
import { cn } from "@/shared/lib/utils"
import { ImageSet } from "@/shared/types/product"
import { routes } from "@/shared/constants/routes"

export const HomeHero = ({ className }: { className?: string }) => {
  return (
    <section className={cn("bg-app-gray-101 md-6:bg-app-gray-100 layer-container", className)}>
      <PageLayer tag="div" className="md-6:justify-between relative z-10 flex h-[645px] items-center justify-center overflow-hidden">
        <HeroContent
          subTitle="NEW PRODUCT"
          name="XX99 Mark II Headphones"
          description="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
          href={routes.product("xx99-mark-two-headphones")}
        />
        <HeroImage
          image={{
            desktop: "/assets/home/desktop/image-hero.webp",
            tablet: "/assets/home/tablet/image-header.webp",
            mobile: "/assets/home/mobile/image-header.webp",
          }}
        />
      </PageLayer>
    </section>
  )
}

type ContentProps = { subTitle?: string; name: string; description: string; href: string }

const HeroContent = ({ subTitle, name, description, href }: ContentProps) => {
  return (
    <div className="max-md-6:items-center max-md-6:text-center flex max-w-[398px] flex-col gap-4 text-white">
      <p className="app-text-overline max-xs-5:text-xs text-white/30">{subTitle}</p>
      <h1 className="max-sm-8:app-text-h2 max-xs-5:app-text-h4">{name}</h1>
      <p className="md-6:pr-5 text-white/80">{description}</p>
      <Link href={href} className="btn-size-lg btn btn-variant-default mt-6 w-fit">
        See Product
      </Link>
    </div>
  )
}

const HeroImage = ({ image }: { image: ImageSet }) => {
  return (
    <>
      {/* Desktop */}
      <Image src={image.desktop} unoptimized={false} height={645} width={650} className="max-md-6:hidden absolute -right-8 -z-10" />

      {/* Tablet */}
      <Image src={image.tablet} height={645} width={750} className="max-sm-7:hidden md-6:hidden absolute -z-10 opacity-40" />

      {/* Mobile */}
      <Image src={image.mobile} height={645} width={540} className="sm-7:hidden absolute -z-10 opacity-40" />
    </>
  )
}
