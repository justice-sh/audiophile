"use client"

import useBodyBackground from "@/shared/hooks/body-background"
import { BackButton } from "@/shared/components/back-button"
import { PageLayer } from "@/shared/components/page-layer"
import { formValidatorUtil } from "@/shared/utils/form"
import { CheckoutFormFields } from "./ui/form-fields"
import { useForm } from "@tanstack/react-form"
import { CheckoutSummary } from "./ui/summary"
import { CheckoutFormData } from "./types"
import { cn } from "@/shared/lib/utils"
import { schema } from "./schema"

export default function CheckoutPage() {
  useBodyBackground()

  const form = useForm({
    defaultValues: {} as CheckoutFormData,
    validators: {
      onChange: ({ value }) => formValidatorUtil(schema, value),
    },
    onSubmit: (data) => {
      console.log("Form submitted with data:", data.value)
    },
  })

  const styles = {
    section: "bg-white rounded-lg p-4",
  }

  return (
    <main className="layer-container mt-14 mb-32 flex flex-col gap-32">
      <BackButton className="-mb-20" />

      <PageLayer>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
          className="md-6:grid-cols-[1fr_350px] grid gap-8"
        >
          <CheckoutFormFields form={form} className={cn(styles.section, "sm-7:p-8")} />
          <CheckoutSummary form={form} className={styles.section} />
        </form>
      </PageLayer>
    </main>
  )
}
