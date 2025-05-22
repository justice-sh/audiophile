import z from "zod"

export const paymentDetailSchema = z.object({ account: z.string().min(1), pin: z.string().min(1) })

export const schema = z.object({
  name: z.string().min(6),
  email: z.string().email(),
  phone: z.string().min(6),
  address: z.string().min(1),
  zipCode: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
  paymentMethod: z.enum(["cash-on-delivery", "e-money"]),
  paymentDetail: paymentDetailSchema.optional(),
})
