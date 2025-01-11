import { Logo } from "@/app/shared/components/logo"
import { PageLayer } from "@/app/shared/components/page-layer"
import { Navigation } from "./ui/navigation"
import { Cart } from "../cart"

export const Header = () => {
  return (
    <header className="bg-app-gray-101 md-6:bg-app-gray-100 sticky top-0 z-50 h-[96px]">
      <PageLayer className="flex h-full max-w-[1120px] items-center justify-between border-b border-solid border-white/20 md:px-0">
        <Logo />
        <Navigation />
        <Cart />
      </PageLayer>
    </header>
  )
}
