import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib/utils"

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-variant-default",
      destructive: "btn-variant-destructive",
      outline: "btn-variant-outline",
      secondary: "btn-variant-secondary",
      ghost: "btn-variant-ghost",
      link: "btn-variant-link",
    },
    size: {
      default: "btn-size-default",
      sm: "btn-size-sm",
      lg: "btn-size-lg",
      icon: "btn-size-icon",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = ({
  ref,
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps & {
  ref?: React.RefObject<HTMLButtonElement>
}) => {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
}
Button.displayName = "Button"

export { Button, buttonVariants }
