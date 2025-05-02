"use client"

import { Logo } from "@/shared/components/logo"
import { PageLayer } from "@/shared/components/page-layer"
import { Cart } from "../cart"
import { MobileNavigation } from "./ui/mobile-navigation"
import { Navigation } from "@/shared/components/navigation"
import { cn } from "@/shared/lib/utils"
import { usePathname } from "next/navigation"

export const Header = () => {
  const pathname = usePathname()

  const styles = {
    bg: pathname === "/" ? "bg-app-gray-101 md-6:bg-app-gray-100" : "bg-black",
  }

  return (
    <header className={cn("layer-container sticky top-0 z-50 h-[96px]", styles.bg)}>
      <PageLayer className="sm-6:max-md-4:justify-start flex h-full items-center justify-between gap-7 border-b border-solid border-white/20">
        <MobileNavigation className="md-4:hidden" />
        <Logo />
        <Navigation className="max-md-4:hidden" />
        <Cart className="sm-6:max-md-4:ml-auto" />
      </PageLayer>
    </header>
  )
}
