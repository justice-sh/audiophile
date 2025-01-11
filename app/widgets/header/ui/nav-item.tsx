"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export type NavItemProps = {
  name: string
  href: string
}

export const NavItem = ({ href, name }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      data-active={isActive}
      className="app-text-sub-title hover:text-app-orange-101 data-[active=true]:text-primary text-white transition-colors"
    >
      {name}
    </Link>
  )
}
