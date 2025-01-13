import Image from "next/image"

export const Cart = ({ className }: { className?: string }) => {
  return <Image className={className} src="/assets/shared/desktop/icon-cart.svg" alt="Cart" width={23} height={20} />
}
