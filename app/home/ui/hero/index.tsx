import { Image } from "@/app/shared/components/image"
import { PageLayer } from "@/app/shared/components/page-layer"
import { buttonVariants } from "@/app/shared/components/ui/button"
import Link from "next/link"
import desktopHero from "@public/assets/home/desktop/image-hero.webp"

export const HomeHero = () => {
  return (
    <section className="md-6:bg-app-gray-100 bg-app-gray-101">
      <PageLayer tag="div" className="relative z-10 flex h-[645px] items-center justify-center overflow-hidden md-6:justify-between">
        <HeroContent />
        <HeroImage />
      </PageLayer>
    </section>
  )
}

const HeroContent = () => {
  return (
    <div className="flex max-w-[398px] flex-col gap-4 max-md-6:items-center max-md-6:text-center">
      <p className="text-white/30 typo-overline-none max-xs-5:text-xs">NEW PRODUCT</p>
      <h1 className="max-sm-8:typo-h2-none max-xs-5:typo-h4-none">XX99 Mark II Headphones</h1>
      <p className="text-white/80 md-6:pr-5">
        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
      </p>
      <Link href="/" className={buttonVariants({ size: "lg", className: "mt-6 w-fit" })}>
        See Product
      </Link>
    </div>
  )
}

const HeroImage = () => {
  return (
    <>
      {/* Desktop */}
      <Image src={desktopHero} unoptimized={false} height={645} width={650} className="absolute -right-8 -z-10 max-md-6:hidden" />

      {/* Tablet */}
      <Image
        src="/assets/home/tablet/image-header.webp"
        height={645}
        width={750}
        className="absolute -z-10 opacity-40 max-sm-7:hidden md-6:hidden"
      />

      {/* Mobile */}
      <Image src="/assets/home/mobile/image-header.webp" height={645} width={540} className="absolute -z-10 opacity-40 sm-7:hidden" />
    </>
  )
}
