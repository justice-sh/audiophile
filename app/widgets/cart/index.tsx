import { MouseEvent, useRef } from "react"
import Image from "next/image"
import { Button } from "@/shared/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog"
import { cartStore, useViewCart } from "@/shared/data/cartStore"

export const Cart = ({ className }: { className?: string }) => {
  const contentRef = useRef<HTMLDivElement>(null)

  const shouldOpen = useViewCart()

  const handleOpen = () => {
    cartStore.trigger.openCart()
  }

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    const content = contentRef.current
    if (!content) return

    const dialogDimensions = content.getBoundingClientRect()

    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      cartStore.trigger.closeCart()
    }
  }

  return (
    <div onClick={handleClose}>
      <Dialog open={shouldOpen}>
        <Button onClick={handleOpen} variant="ghost" className={className}>
          <Image src="/assets/shared/desktop/icon-cart.svg" alt="Cart" width={23} height={20} />
        </Button>

        <DialogContent
          ref={contentRef}
          className="lg-3:right-[8%] md-1:right-[26px] md-1:left-[unset] md-1:translate-x-[unset] fixed top-[120px] translate-y-[unset]"
        >
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
