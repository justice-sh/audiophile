"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog"
import { cartStore, useCartItems, useCartGrandTotal, useViewCart } from "@/shared/data/cart-store"
import { clickOutside } from "@/shared/utils/click-outside"
import { Button } from "@/shared/components/ui/button"
import { MouseEvent, useRef } from "react"
import { CartItem } from "./ui/cart-item"
import { cn } from "@/shared/lib/utils"
import Image from "next/image"
import { formatPrice } from "@/shared/utils/price"
import { routes } from "@/shared/constants/routes"
import { useRouter } from "next/navigation"

export const Cart = ({ className, styles }: { className?: string; styles?: { container?: string } }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const shouldOpen = useViewCart()
  const items = useCartItems()

  const handleOpen = () => {
    cartStore.trigger.openCart()
  }

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    clickOutside(e, contentRef.current, cartStore.trigger.closeCart)
  }

  const handleCheckout = () => {
    router.push(routes.checkout())
    cartStore.trigger.closeCart()
  }

  return (
    <div onClick={handleClose} className={styles?.container}>
      <Dialog open={shouldOpen}>
        <Button onClick={handleOpen} variant="ghost" className={cn("min-h-auto w-auto min-w-auto p-1", className)}>
          <Image src="/assets/shared/desktop/icon-cart.svg" alt="Cart" width={23} height={20} />
        </Button>

        <DialogContent
          ref={contentRef}
          className="lg-3:right-[8%] sm-8:right-[26px] sm-8:left-[unset] sm-8:translate-x-[unset] sm-8:max-w-[500px] fixed top-[120px] flex w-full translate-y-[unset] flex-col gap-8 sm:max-w-[500px]"
          hideClose
        >
          <DialogHeader>
            <div className="flex items-center justify-between gap-4">
              <DialogTitle className="uppercase">Cart ({items.length})</DialogTitle>

              <RemoveAll itemCount={items.length} />
            </div>
            <DialogDescription></DialogDescription>
          </DialogHeader>

          <Layout itemCount={items.length}>
            <div className="flex max-h-[calc(100vh-400px)] flex-col gap-4 overflow-auto">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <CartTotal />

            <Button onClick={handleCheckout} data-disabled={!Boolean(items.length)} className="btn btn-variant-default btn-size-lg">
              Checkout
            </Button>
          </Layout>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const CartTotal = () => {
  const total = useCartGrandTotal()

  return (
    <div className="flex justify-between gap-5">
      <p className="text-black/60 uppercase">total</p>
      <h6>{formatPrice(total)}</h6>
    </div>
  )
}

const RemoveAll = ({ itemCount }: { itemCount: number }) => {
  if (itemCount === 0) return null

  const handleClear = () => {
    cartStore.trigger.clear()
  }

  return (
    <Button
      size="sm"
      variant="link"
      onClick={handleClear}
      className="hover:text-primary p-0 text-sm text-black/70 normal-case underline underline-offset-1"
    >
      Remove all
    </Button>
  )
}

const Layout = ({ children, itemCount }: { itemCount: number; children: React.ReactNode }) => {
  if (itemCount === 0) return <div className="grid h-[100px] place-items-center">Your cart is empty</div>

  return children
}
