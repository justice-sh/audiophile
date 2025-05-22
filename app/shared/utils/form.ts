import { z, ZodSchema } from "zod"
import { fromZodError } from "zod-validation-error"
import { Prettify } from "../types/prettify"

export function formValidatorUtil<S extends ZodSchema, T extends z.infer<S>>(schema: Prettify<S>, value: T) {
  const result = schema.safeParse(value)
  if (result.success) return undefined

  const fields = fromZodError(result.error).details.reduce(
    (acc, detail) => {
      const path = detail.path.join(".")
      acc[path] = `${detail.message} at ${path}`
      return acc
    },
    {} as Record<string, string>,
  ) as { [K in keyof T]: T[K] }

  return { fields }
}
