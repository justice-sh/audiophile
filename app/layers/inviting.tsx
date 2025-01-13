import { Image } from "@/shared/components/image"
import { PageLayer } from "@/shared/components/page-layer"
import { cn } from "@/shared/lib/utils"

export const Inviting = ({ className }: { className?: string }) => {
  return (
    <PageLayer className={cn("max-md-10:flex-col sm-8:gap-14 flex items-center justify-between gap-10", className)}>
      <Content />
      <Hero />
    </PageLayer>
  )
}

const Content = () => {
  return (
    <div className="max-md-10:order-2 md-10:max-w-[445px] max-md-10:text-center max-w-[573px]">
      <h2 className="max-sm-8:app-text-h3 max-sm-5:app-text-h4 max-xs-4:app-text-h6 mb-8">
        Bringing you the <span className="text-primary">best</span> audio gear
      </h2>

      <p className="">
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio
        accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our
        products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio
        equipment.
      </p>
    </div>
  )
}

const Hero = () => {
  return (
    <>
      <Image
        src="/assets/shared/desktop/image-best-gear.jpg"
        alt="Best gear"
        className="max-md-10:hidden rounded-lg"
        width={540}
        height={588}
      />
      <Image
        src="/assets/shared/tablet/image-best-gear.jpg"
        alt="Best gear"
        className="max-sm-8:hidden md-10:hidden rounded-lg"
        width={1378}
        height={600}
      />
      <Image src="/assets/shared/mobile/image-best-gear.jpg" alt="Best gear" className="sm-8:hidden rounded-lg" width={654} height={600} />
    </>
  )
}
