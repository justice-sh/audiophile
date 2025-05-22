import { RadioField } from "@/shared/components/form/radio-field"
import { TextField } from "@/shared/components/form/text-field"
import { CheckoutForm, CheckoutFormData } from "../types"
import { formValidatorUtil } from "@/shared/utils/form"
import { Label } from "@/shared/components/ui/label"
import { paymentDetailSchema } from "../schema"
import { cn } from "@/shared/lib/utils"

export function CheckoutFormFields({ className, form }: { className?: string; form: CheckoutForm }) {
  const radioList: { value: CheckoutFormData["paymentMethod"]; label: string }[] = [
    { value: "e-money", label: "e-Money" },
    { value: "cash-on-delivery", label: "Cash on delivery" },
  ]

  return (
    <section className={cn("flex flex-col gap-8", className)}>
      <h4 className="text-2xl font-bold">Checkout</h4>

      <section className="flex flex-col gap-8">
        <FormSection label="Billing details">
          <form.Field name="name" children={(field) => <TextField field={field} label="Name" placeholder="John Doe" />} />

          <form.Field
            name="email"
            children={(field) => <TextField field={field} label="Email address" placeholder="johndoe@gmail.com" />}
          />

          <form.Field name="phone" children={(field) => <TextField field={field} label="Phone number" placeholder="+234-821-8420-840" />} />
        </FormSection>

        <FormSection label="Shipping info">
          <form.Field name="address" children={(field) => <TextField field={field} label="Address" placeholder="1124 Doe Avenue" />} />

          <form.Field name="zipCode" children={(field) => <TextField field={field} label="Zip Code" placeholder="1278" />} />

          <form.Field name="city" children={(field) => <TextField field={field} label="City" placeholder="Port Harcourt" />} />

          <form.Field name="country" children={(field) => <TextField field={field} label="Country" placeholder="Nigeria" />} />
        </FormSection>

        <FormSection label="Payment details" className="grid-cols-1">
          <form.Field
            name="paymentMethod"
            children={(field) => (
              <RadioField
                field={field}
                label="Payment Method"
                styles={{ wrapper: "grid grid-cols-2 items-start gap-8 w-full", input: "flex flex-col gap-5" }}
                list={radioList}
              />
            )}
          />

          <PaymentDetail form={form} />
        </FormSection>
      </section>
    </section>
  )
}

const FormSection = ({ label, children, className }: { className?: string; children: React.ReactNode; label: string }) => {
  return (
    <section className="grid gap-6">
      <Label className="text-primary font-bold uppercase">{label}</Label>
      <div className={cn("grid grid-cols-2 gap-5", className)}>{children}</div>
    </section>
  )
}

const PaymentDetail = ({ form }: { form: CheckoutForm }) => {
  return (
    <form.Subscribe
      selector={(state) => state.values.paymentMethod}
      children={(method) => {
        if (method !== "e-money") return null
        return (
          <div className="grid grid-cols-2 gap-8">
            <form.Field
              name="paymentDetail.account"
              validators={{
                onChange: ({ value }) =>
                  formValidatorUtil(paymentDetailSchema, value as CheckoutFormData["paymentDetail"])?.fields?.account,
              }}
              children={(field) => <TextField field={field} label="e-Money Number" placeholder="2125362738" />}
            />

            <form.Field
              name="paymentDetail.pin"
              validators={{
                onChange: ({ value }) => formValidatorUtil(paymentDetailSchema, value as CheckoutFormData["paymentDetail"])?.fields?.pin,
              }}
              children={(field) => <TextField field={field} label="e-Money Pin" placeholder="6534" />}
            />
          </div>
        )
      }}
    />
  )
}
