"use client"

import { BackButton } from "@/shared/components/back-button"
import { PageLayer } from "@/shared/components/page-layer"
import { CheckoutForm } from "./ui/form"
import { CheckoutSummary } from "./ui/summary"
import useBodyBackground from "@/shared/hooks/body-background"

export default function CheckoutPage() {
  useBodyBackground()

  const styles = {
    section: "bg-white rounded-lg p-4",
  }

  return (
    <main className="layer-container mt-14 mb-32 flex flex-col gap-32">
      <BackButton className="-mb-20" />

      <PageLayer className="grid grid-cols-[1fr_350px] gap-8">
        <CheckoutForm className={styles.section} />
        <CheckoutSummary className={styles.section} />
      </PageLayer>
    </main>
  )
}
