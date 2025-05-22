import z from "zod"
import { schema } from "./schema"
import { Form } from "@/shared/types/form"

export type CheckoutFormData = z.infer<typeof schema>

export type CheckoutForm = Form<CheckoutFormData>
