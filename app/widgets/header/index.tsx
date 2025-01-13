import { Logo } from "@/shared/components/logo"
import { PageLayer } from "@/shared/components/page-layer"
import { Navigation } from "./ui/navigation"
import { Cart } from "../cart"
import { MobileNavigation } from "./ui/mobile-navigation"

export const Header = () => {
  return (
    <header className="bg-app-gray-101 md-6:bg-app-gray-100 sticky top-0 z-50 h-[96px]">
      <PageLayer className="lg-3:px-0 sm-6:max-md-4:justify-start flex h-full max-w-[1120px] items-center justify-between gap-7 border-b border-solid border-white/20">
        <MobileNavigation className="md-4:hidden" />
        <Logo />
        <Navigation className="max-md-4:hidden" />
        <Cart className="sm-6:max-md-4:ml-auto" />
      </PageLayer>
    </header>
  )
}
