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
      className={cn("select-none", className)}
      style={{
        maxWidth: "100%",
        height: "auto",
        border: "none",
        outline: "none",
        outlineWidth: 0,
        ...style,
      }}
    />
  )
}

export const Image = forwardRef(BaseImage)
