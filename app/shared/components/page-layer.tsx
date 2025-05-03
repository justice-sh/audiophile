import { ReactNode } from "react"
import { cn } from "../lib/utils"

interface Props {
  children?: ReactNode
  className?: string
  tag?: "section" | "div"
  id?: string
  withContainer?: boolean
}

export const PageLayer = ({
  ref,
  children,
  className,
  id,
  tag = "section",
  withContainer = false,
}: Props & {
  ref?: React.RefObject<HTMLDivElement>
}) => {
  const Tag = tag

  const styles = "mx-auto box-border w-full max-w-[1206px]"

  if (!withContainer) {
    return (
      <Tag id={id} ref={ref} className={cn(styles, className)}>
        {children}
      </Tag>
    )
  }

  return (
    <section className="layer-container">
      <Tag id={id} ref={ref} className={cn(styles, className)}>
        {children}
      </Tag>
    </section>
  )
}

PageLayer.displayName = "PageLayer"

// export default PageLayer
