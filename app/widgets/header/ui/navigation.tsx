import { routes } from "@/app/shared/constants/routes"
import { NavItem, NavItemProps } from "./nav-item"

const navItems: NavItemProps[] = [
  { name: "home", href: routes.home() },
  { name: "headphones", href: routes.category("headphones") },
  { name: "speakers", href: routes.category("speakers") },
  { name: "earphones", href: routes.category("earphones") },
]

export const Navigation = () => {
  return (
    <div className="flex items-center gap-9">
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </div>
  )
}

export const MobileNavigation = () => {
  return <></>
}
