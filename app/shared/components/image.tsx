import { forwardRef, Ref } from "react"
import NextImage, { ImageProps } from "next/image"
import { cn } from "../lib/utils"

type Props = Omit<ImageProps, "alt"> & {
  alt?: string
}

const BaseImage = ({ className, alt = "", style, ...props }: Props, ref: Ref<HTMLImageElement>) => {
  return (
    <NextImage
      ref={ref}
      loading="lazy"
      alt={alt}
      unoptimized
      {...props}
      className={cn("h-auto max-w-full select-none", className)}
      style={{
        border: "none",
        outline: "none",
        outlineWidth: 0,
        ...style,
      }}
    />
  )
}

export const Image = forwardRef(BaseImage)
