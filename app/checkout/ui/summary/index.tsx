import { useCartSum, useCartItems } from "@/shared/data/cart-store"
import { cn } from "@/shared/lib/utils"
import { CartItem } from "./ui/cart-item"
import { formatPrice } from "@/shared/utils/price"
import { Button } from "@/shared/components/ui/button"
import { CheckoutForm } from "@/checkout/types"
import { paymentDetailSchema } from "@/checkout/schema"

export function CheckoutSummary({ className, form }: { className?: string; form: CheckoutForm }) {
  const items = useCartItems()
  const { total, vat, shipping, grandTotal } = useCartSum()

  return (
    <section className={cn("flex max-h-fit flex-col gap-8", className)}>
      <h6>Summary</h6>

      <div className="flex max-h-[calc(100vh-400px)] flex-col gap-4 overflow-auto">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <Layout itemCount={items.length}>
        <div className="flex flex-col gap-2">
          <ItemSum name="total" value={total} />
          <ItemSum name="shipping" value={shipping} />
          <ItemSum name="vat (included)" value={vat} />
        </div>

        <ItemSum name="Grand total" value={grandTotal} styles={{ value: "text-primary" }} />

        <form.Subscribe
          selector={(state) => ({
            isValid: state.isValid && state.isDirty,
            isSubmitting: state.isSubmitting,
            paymentMethod: state.values.paymentMethod,
            paymentDetail: state.values.paymentDetail,
          })}
          children={(state) => {
            if (state.paymentMethod === "e-money" && paymentDetailSchema.safeParse(state.paymentDetail).error) {
              state.isValid = false
            }

            return (
              <Button type="submit" disabled={!state.isValid} isLoading={state.isSubmitting} onClick={form.handleSubmit}>
                Continue & Pay
              </Button>
            )
          }}
        />
      </Layout>
    </section>
  )
}

const ItemSum = ({ name, value, styles }: { name: string; value: number; styles?: { value?: string } }) => {
  return (
    <div className="flex justify-between gap-5">
      <p className="text-black/60 uppercase">{name}</p>
      <h6 className={styles?.value}>{formatPrice(value)}</h6>
    </div>
  )
}

const Layout = ({ children, itemCount }: { itemCount: number; children: React.ReactNode }) => {
  if (itemCount === 0) return <div className="mb-8 grid place-items-center">Your cart is empty</div>
  return children
}
