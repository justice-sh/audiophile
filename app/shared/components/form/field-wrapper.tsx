import { FormFieldStyles } from "@/shared/types/form"
import { AnyFieldApi } from "@tanstack/react-form"
import { FieldInfo } from "./field-info"
import { cn } from "@/shared/lib/utils"
import { Label } from "../ui/label"
import React from "react"

interface Props {
  field: AnyFieldApi
  label?: string
  id?: string
  children: React.ReactNode
  styles?: FormFieldStyles
}

export function FieldWrapper({ id, styles, label, field, children }: Props) {
  return (
    <div className={cn("flex flex-col gap-1", styles?.wrapper)}>
      {label && (
        <Label htmlFor={id} className={cn("mb-1", styles?.label)}>
          {label}
        </Label>
      )}
      {children}
      <FieldInfo field={field} className={styles?.error} />
    </div>
  )
}
