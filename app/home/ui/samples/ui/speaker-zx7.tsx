import { Image } from "@/app/shared/components/image"
import { Button } from "@/app/shared/components/ui/button"
import { routes } from "@/app/shared/constants/routes"
import Link from "next/link"

export const SpeakerZX7 = () => {
  return (
    <div className="bg-app-gray-102 md-2:pl-[62px] md-6:pl-[92px] relative z-10 h-[320px] overflow-hidden rounded-lg py-[99px] pl-8">
      <Content />
      <BackgroundImage />
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <h4 className="mb-8">ZX7 SPEAKER</h4>

      <Button asChild variant="outline" size="lg">
        <Link href={routes.product("zx7-speaker")}>See product</Link>
      </Button>
    </div>
  )
}

const BackgroundImage = () => {
  return (
    <>
      <Image src="/assets/home/desktop/image-speaker-zx7.jpg" fill className="max-md-6:hidden absolute -z-10" />
      <Image src="/assets/home/tablet/image-speaker-zx7.jpg" fill className="max-sm-8:hidden md-6:hidden absolute -z-10" />
      <Image src="/assets/home/mobile/image-speaker-zx7.jpg" fill className="sm-8:hidden absolute -z-10" />
    </>
  )
}
