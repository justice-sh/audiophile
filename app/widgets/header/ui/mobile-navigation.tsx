import { Image } from "@/shared/components/image"
import { Logo } from "@/shared/components/logo"
import { cn } from "@/shared/lib/utils"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/shared/components/ui/sheet"
import { NavItem } from "@/shared/components/nav-item"
import { navItems } from "@/shared/components/navigation"

export const MobileNavigation = ({ className }: { className?: string }) => {
  return (
    <Sheet>
      <SheetTrigger className={className}>
        <Image src="/assets/shared/tablet/icon-hamburger.svg" width={16} height={15} />
      </SheetTrigger>

      <SheetContent className="bg-app-gray-101 border-none">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className={cn("mt-10 grid gap-6", className)}>
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} sheetClose />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
