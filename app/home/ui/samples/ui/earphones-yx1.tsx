import { Image } from "@/app/shared/components/image"
import { Button } from "@/app/shared/components/ui/button"
import { routes } from "@/app/shared/constants/routes"
import Link from "next/link"

export const EarphonesYX1 = () => {
  return (
    <div className="sm-8:grid-cols-2 sm-5:[&>*]:h-[320px] grid gap-4 [&>*]:h-[200px]">
      <div className="bg-app-gray-102 relative z-10 overflow-hidden rounded-lg">
        <Image src="/assets/home/desktop/image-earphones-yx1.jpg" fill className="absolute -z-10" />
      </div>

      <div className="bg-app-gray-102 sm-5:pl-10 flex flex-col justify-center rounded-lg p-4">
        <h4 className="mb-8">YX1 EARPHONES</h4>

        <Button asChild variant="outline" size="lg" className="w-fit">
          <Link href={routes.product("zx7-speaker")}>See product</Link>
        </Button>
      </div>
    </div>
  )
}
