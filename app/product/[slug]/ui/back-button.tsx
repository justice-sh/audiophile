"use client"

import { PageLayer } from "@/shared/components/page-layer"
import { Button } from "@/shared/components/ui/button"
import { useRouter } from "next/navigation"

export const BackButton = () => {
  const router = useRouter()

  return (
    <PageLayer className="">
      <Button variant="link" className="h-fit px-0 py-0 text-black/60" onClick={router.back}>
        Go Back
      </Button>
    </PageLayer>
  )
}
