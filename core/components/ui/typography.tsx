import React from "react"
import { cn } from "@/core/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const headingVariants = cva("", {
  variants: {
    variant: {
      h1: "font-bold text-base",
      h2: "font-bold text-sm",
      h3: "font-bold text-xs",
      body1: "font-semibold text-xs",
      body2: "font-semibold text-xs dark:text-white",
      p1: "text-xs"
    },
  },
  defaultVariants: {
    variant: "h1"
  },
})

type TypographyProps = {
  as?: keyof React.JSX.IntrinsicElements
  variant?: VariantProps<typeof headingVariants>["variant"]
  className?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

function Typography({ as = "span", variant, className, children, ...props }: TypographyProps) {
  const Comp = as as React.ElementType
  return (
    <Comp className={cn(headingVariants({ variant }), className)} {...props}>
      {children}
    </Comp>
  )
}

export {
  type TypographyProps,
  Typography
}