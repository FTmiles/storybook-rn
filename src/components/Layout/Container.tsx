import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../core/utils"

const containerVariants = cva(
  "flex-1 space-y-4 p-4 py-6",
  {
    variants: {
      size: {
        full: "w-full",
        sm: "max-w-sm",
        md: "max-w-md",        
        lg: "max-w-lg",
        xl: "max-w-xl",
      },
    },
    defaultVariants: {
      size: "full",
    },
  }
)

export interface ContainerProps
  extends React.ButtonHTMLAttributes<HTMLDivElement>,
  VariantProps<typeof containerVariants> {
    bg?: string
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, bg, ...props }, ref) => {
    const bgColor = bg ? `bg-${bg}` : ""
    return (
      <div
        className={cn(bgColor, containerVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container, containerVariants }