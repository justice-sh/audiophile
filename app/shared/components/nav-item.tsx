"use client"

import { SheetClose } from "@/shared/components/ui/sheet"
import { cn } from "@/shared/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment, ReactNode } from "react"

export type NavItemProps = {
  name: string
  href: string
  className?: string
  sheetClose?: boolean
}

export const NavItem = ({ href, name, className, sheetClose }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <SheetContentItem sheetClose={sheetClose}>
      <Link
        href={href}
        data-active={isActive}
        className={cn(
          "app-text-sub-title hover:text-app-orange-101 data-[active=true]:text-primary text-white transition-colors",
          className,
        )}
      >
        {name}
      </Link>
    </SheetContentItem>
  )
}

const SheetContentItem = ({ children, sheetClose }: { children?: ReactNode; sheetClose?: boolean }) => {
  return sheetClose ? <SheetClose asChild>{children}</SheetClose> : <Fragment>{children}</Fragment>
}
