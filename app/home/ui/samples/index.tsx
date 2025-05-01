import { PageLayer } from "@/shared/components/page-layer"
import { SpeakerZX9 } from "./ui/speaker-zx9"
import { SpeakerZX7 } from "./ui/speaker-zx7"
import { EarphonesYX1 } from "./ui/earphones-yx1"
import { cn } from "@/shared/lib/utils"

export const HomeSamples = ({ className }: { className?: string }) => {
  return (
    <section className="layer-container">
      <PageLayer className={cn("md-7:space-y-12 space-y-8", className)}>
        <SpeakerZX9 />
        <SpeakerZX7 />
        <EarphonesYX1 />
      </PageLayer>
    </section>
  )
}
