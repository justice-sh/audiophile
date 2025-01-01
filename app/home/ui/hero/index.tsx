import { Image } from "@/app/shared/components/image"
import { PageLayer } from "@/app/shared/components/page-layer"
import { buttonVariants } from "@/app/shared/components/ui/button"
import Link from "next/link"

export const HomeHero = () => {
  return (
    <section className="bg-aud-gray-900">
      <PageLayer tag="div" className="relative z-10 flex h-[645px] items-center justify-between overflow-hidden">
        <Content />
        <Image src="/assets/home/hero-image.png" height={645} width={700} className="-mr-16 -mt-20" />
      </PageLayer>
    </section>
  )
}

const Content = () => {
  return (
    <div className="">
      <p className="typo-overline-none mb-4 text-white/30">NEW PRODUCT</p>
      <h1 className="mb-4">XX99 Mark II Headphones</h1>
      <p className="mb-4 max-w-[349px] text-white/80">
        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
      </p>
      <Link href="/" className={buttonVariants({ size: "lg" })}>
        See Product
      </Link>
    </div>
  )
}
