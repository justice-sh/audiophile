import { forwardRef, ReactNode } from "react"
import { cn } from "../lib/utils"

interface Props {
  children?: ReactNode
  className?: string
  tag?: "section" | "div"
  id?: string
}

export const PageLayer = forwardRef(({ children, className, id, tag = "section" }: Props, ref: React.Ref<HTMLDivElement>) => {
  const Tag = tag
  return (
    <Tag id={id} ref={ref} className={cn("mx-auto box-border w-full max-w-[1206px] px-4 sm-1:px-12", className)}>
      {children}
    </Tag>
  )
})

PageLayer.displayName = "PageLayer"

// export default PageLayer
