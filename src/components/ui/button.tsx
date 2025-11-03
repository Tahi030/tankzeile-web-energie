import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-[hsl(25_45%_35%)] text-white hover:bg-[hsl(25_45%_30%)] hover:shadow-md",
        destructive:
          "bg-[hsl(25_45%_35%)] text-white hover:bg-[hsl(25_45%_30%)] hover:shadow-md",
        outline:
          "border-2 border-[hsl(25_45%_35%)] bg-background text-[hsl(25_45%_35%)] hover:bg-[hsl(25_45%_35%)] hover:text-white hover:shadow-md",
        secondary:
          "bg-[hsl(25_45%_35%)] text-white hover:bg-[hsl(25_45%_30%)] hover:shadow-md",
        ghost: "text-[hsl(25_45%_35%)] hover:bg-[hsl(25_45%_35%)]/10 hover:text-[hsl(25_45%_30%)]",
        link: "text-[hsl(25_45%_35%)] underline-offset-4 hover:underline hover:text-[hsl(25_45%_30%)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
