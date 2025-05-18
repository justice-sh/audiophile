"use client"

import { PageLayer } from "@/shared/components/page-layer"
import { Button } from "@/shared/components/ui/button"
import { useRouter } from "next/navigation"

export const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter()

  return (
    <PageLayer className={className}>
      <Button variant="link" className="h-fit px-0 py-0 text-black/60" onClick={router.back}>
        Go Back
      </Button>
    </PageLayer>
  )
}
