import Image from "next/image"
import Link from "next/link"
import { routes } from "../constants/routes"

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href={routes.home()} className={className}>
      <Image src="/assets/shared/desktop/logo.svg" alt="Logo" width={143} height={25} />
    </Link>
  )
}
