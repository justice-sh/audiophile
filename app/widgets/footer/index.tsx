import { Logo } from "@/shared/components/logo"
import { Navigation } from "@/shared/components/navigation"
import { PageLayer } from "@/shared/components/page-layer"
import { Socials } from "./socials"

const Section = PageLayer

export const Footer = () => {
  return (
    <footer className="bg-app-gray-101 max-sm-6:text-center layer-container flex min-h-4 flex-col gap-6 [&>*]:first-of-type:pt-6 [&>*]:last-of-type:pb-10">
      <Section className="relative">
        <TopLeftMark />
      </Section>

      <Section className="max-sm-6:items-center flex gap-5 max-md:flex-col md:justify-between">
        <Logo className="block max-w-fit" />

        <Navigation className="max-sm-6:flex-col gap-6" />
      </Section>

      <Section className="flex">
        <p className="max-w-[540px] text-white/50">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
      </Section>

      <Section className="max-sm-6:flex-col flex items-center justify-between gap-5">
        <p className="font-bold text-white/50">Copyright 2025. All Rights Reserved.</p>
        <Socials />
      </Section>
    </footer>
  )
}

const TopLeftMark = () => <div className="bg-app-orange-102 absolute top-0 left-0 h-1 w-[101px]" />
