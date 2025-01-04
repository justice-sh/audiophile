"use client"

import { useRef } from "react"
import Link from "next/link"
import { StaticImageData } from "next/image"
import { ChevronRight } from "lucide-react"
import { Image } from "@/app/shared/components/image"
import oval from "../assets/oval.png"

type CategoryItemProps = {
  image: {
    src: string | StaticImageData
    width: number
    height: number
  }
  title: string
  href: string
}

export const CategoryItem = ({ image, title, href }: CategoryItemProps) => {
  const ref = useRef<HTMLImageElement>(null)

  const styles = {
    image: {
      out: "motion-opacity-in-100 motion-preset-compress motion-scale-in-105",
    },
  }

  const handleMouseEnter = () => {
    ref.current?.classList.remove(...styles.image.out.split(" "))
  }

  const handleMouseLeave = () => {
    ref.current?.classList.add(...styles.image.out.split(" "))
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative flex items-end justify-center"
      style={{ height: 204 + image.height / 2 }}
    >
      <div className="absolute top-0 z-10 flex justify-center">
        <Image {...image} className="group-hover:motion-preset-pulse-sm" placeholder="blur" ref={ref} />
        <Image src={oval} width={122} height={18} className="absolute top-[75%] -z-10" />
      </div>

      <Link
        href={href}
        className="bg-app-gray-102 ring-app-gray-103 group flex h-[204px] w-full cursor-pointer flex-col items-center justify-end gap-4 rounded-lg pb-8"
      >
        <h6 className="text-black">{title}</h6>

        <div className="flex gap-3">
          <p className="app-text-sub-title group-hover:text-primary text-black/50 transition-colors duration-500">shop</p>
          <ChevronRight className="text-primary" />
        </div>
      </Link>
    </div>
  )
}
