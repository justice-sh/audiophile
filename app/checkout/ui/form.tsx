import { cn } from "@/shared/lib/utils"

export function CheckoutForm({ className }: { className?: string }) {
  return (
    <section className={cn("", className)}>
      <h4 className="text-2xl font-bold">Checkout</h4>
    </section>
  )
}
