import { SocialLinks } from "@/shared/constants/links"
import { cn } from "@/shared/lib/utils"
import React from "react"

export const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-5", className)}>
      <SocialItem icon={<img src="/assets/shared/desktop/icon-twitter.svg" alt="X" width="24" />} href={SocialLinks.twitter} />
      <SocialItem
        icon={<img src="/assets/shared/desktop/icon-github-mark-white.svg" alt="GitHub" width="24" />}
        href={SocialLinks.github}
      />
      <SocialItem
        icon={<img src="/assets/shared/desktop/icon-frontend-mentor.svg" alt="Frontend Mentor" width="24" />}
        href={SocialLinks.frontendmentor}
      />
    </div>
  )
}

const SocialItem = ({ icon, href }: { icon: React.ReactNode; href: string }) => {
  return (
    <a href={href} target="_blank" className="flex items-center justify-center">
      {icon}
    </a>
  )
}
