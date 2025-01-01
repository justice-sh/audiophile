import NextImage, { ImageProps } from "next/image"
import { cn } from "../lib/utils"

type Props = Omit<ImageProps, "alt"> & {
  alt?: string
}

export const Image = ({ className, alt = "", ...props }: Props) => {
  return (
    <NextImage
      {...props}
      loading="lazy"
      alt={alt}
      unoptimized
      className={cn("h-auto max-w-full select-none border-none outline-none outline-0 ring-0", className)}
    />
  )
}
