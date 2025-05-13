import { MouseEvent } from "react"

export const clickOutside = (e: MouseEvent<HTMLDivElement>, el: HTMLElement | null, callback: () => void) => {
  if (!el) return

  const elementDimensions = el.getBoundingClientRect()

  if (
    e.clientX < elementDimensions.left ||
    e.clientX > elementDimensions.right ||
    e.clientY < elementDimensions.top ||
    e.clientY > elementDimensions.bottom
  ) {
    callback()
  }
}
