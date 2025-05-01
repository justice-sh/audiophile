import { ReactNode } from "react"
import { cn } from "../lib/utils"

interface Props {
  children?: ReactNode
  className?: string
  tag?: "section" | "div"
  id?: string
}

export const PageLayer = ({
  ref,
  children,
  className,
  id,
  tag = "section",
}: Props & {
  ref?: React.RefObject<HTMLDivElement>
}) => {
  const Tag = tag
  return (
    <Tag id={id} ref={ref} className={cn("sm-1:px-6 mx-auto box-border w-full max-w-[1206px] px-4 md:px-10", className)}>
      {children}
    </Tag>
  )
}

PageLayer.displayName = "PageLayer"

// export default PageLayer
