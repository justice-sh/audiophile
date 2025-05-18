import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"
import { routes } from "../constants/routes"

const useBodyBackground = () => {
  const pathname = usePathname()
  const styleRef = useRef<string[]>([])

  useEffect(() => {
    const styles = { [routes.checkout()]: "bg-gray-100 dark:bg-gray-800" }

    if (Object.keys(styles).find((route) => pathname.startsWith(route))) {
      styleRef.current = styles[routes.checkout()].split(" ")
      document.body.classList.add(...styleRef.current)
    }

    return () => {
      document.body.classList.remove(...styleRef.current)
      styleRef.current = []
    }
  }, [pathname])
}

export default useBodyBackground
