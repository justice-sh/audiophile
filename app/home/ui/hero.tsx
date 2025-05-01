import { Image } from "@/shared/components/image"
import { PageLayer } from "@/shared/components/page-layer"
import Link from "next/link"
import desktopHero from "@public/assets/home/desktop/image-hero.webp"
import { cn } from "@/shared/lib/utils"

export const HomeHero = ({ className }: { className?: string }) => {
  return (
    <section className={cn("bg-app-gray-101 md-6:bg-app-gray-100 layer-container", className)}>
      <PageLayer tag="div" className="md-6:justify-between relative z-10 flex h-[645px] items-center justify-center overflow-hidden">
        <HeroContent />
        <HeroImage />
      </PageLayer>
    </section>
  )
}

const HeroContent = () => {
  return (
    <div className="max-md-6:items-center max-md-6:text-center flex max-w-[398px] flex-col gap-4 text-white">
      <p className="app-text-overline max-xs-5:text-xs text-white/30">NEW PRODUCT</p>
      <h1 className="max-sm-8:app-text-h2 max-xs-5:app-text-h4">XX99 Mark II Headphones</h1>
      <p className="md-6:pr-5 text-white/80">
        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
      </p>
      <Link href="/" className="btn-size-lg btn btn-variant-default mt-6 w-fit">
        See Product
      </Link>
    </div>
  )
}

const HeroImage = () => {
  return (
    <>
      {/* Desktop */}
      <Image src={desktopHero} unoptimized={false} height={645} width={650} className="max-md-6:hidden absolute -right-8 -z-10" />

      {/* Tablet */}
      <Image
        src="/assets/home/tablet/image-header.webp"
        height={645}
        width={750}
        className="max-sm-7:hidden md-6:hidden absolute -z-10 opacity-40"
      />

      {/* Mobile */}
      <Image src="/assets/home/mobile/image-header.webp" height={645} width={540} className="sm-7:hidden absolute -z-10 opacity-40" />
    </>
  )
}
