import { PageLayer } from "@/app/shared/components/page-layer"
import { SpeakerZX9 } from "./ui/speaker-zx9"
import { SpeakerZX7 } from "./ui/speaker-zx7"
import { EarphonesYX1 } from "./ui/earphones-yx1"
import { cn } from "@/app/shared/lib/utils"

export const HomeSamples = ({ className }: { className?: string }) => {
  return (
    <PageLayer className={cn("space-y-12", className)}>
      <SpeakerZX9 />
      <SpeakerZX7 />
      <EarphonesYX1 />
    </PageLayer>
  )
}
