import NextImage, { ImageProps } from "next/image"
import { cn } from "../lib/utils"

type Props = Omit<ImageProps, "alt"> & {
  alt?: string
}

export const Image = ({ className, alt = "", style, ...props }: Props) => {
  return (
    <NextImage
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
