import { Image } from "@/shared/components/image"
import { Button } from "@/shared/components/ui/button"
import { routes } from "@/shared/constants/routes"
import Link from "next/link"

export const SpeakerZX9 = () => {
  return (
    <div className="bg-primary max-md-4:flex-col text-h1 md-4:h-[560px] max-md-4:px-4 max-sm-7:py-14 max-md-4:py-16 md-4:gap-[138px] sm-7:gap-16 relative z-10 flex items-center justify-center gap-8 overflow-hidden rounded-lg pr-4">
      <PatternCircles />
      <Hero />
      <Content />
    </div>
  )
}

const Content = () => {
  return (
    <div className="max-md-4:items-center max-md-4:text-center flex h-full flex-col justify-center">
      <h1 className="max-sm-7:app-text-h3 mb-6 text-white">
        ZX9 <br /> SPEAKER
      </h1>

      <p className="md-4:mb-10 mb-6 max-w-[349px] text-white/75">
        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
      </p>

      <Button variant="secondary" size="lg" className="w-fit" asChild>
        <Link href={routes.product("zx9-speaker")}>See product</Link>
      </Button>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="flex items-end justify-center overflow-hidden">
      <Image
        src="/assets/home/desktop/image-speaker-zx9.png"
        className="md-4:h-[450px] -mb-[10px] h-[237px] w-auto"
        width={410}
        height={439}
      />
    </div>
  )
}

const PatternCircles = () => (
  <Image
    src="/assets/home/desktop/pattern-circles.svg"
    className="md-4:-left-[160px] md-4:-top-[20px] max-sm-7:w-[558px] sm-7:-top-[44%] absolute -top-[20%] -z-10 max-w-[unset]"
    width={944}
    height={944}
  />
)
