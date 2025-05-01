import { routes } from "@/shared/constants/routes"
import { NavItem, NavItemProps } from "./nav-item"
import { cn } from "@/shared/lib/utils"

export const navItems: NavItemProps[] = [
  { name: "home", href: routes.home() },
  { name: "headphones", href: routes.category("headphones") },
  { name: "speakers", href: routes.category("speakers") },
  { name: "earphones", href: routes.category("earphones") },
]

export const Navigation = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-9", className)}>
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </div>
  )
}
