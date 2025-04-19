import React from "react"
import { cn } from "@/core/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const headingVariants = cva("", {
  variants: {
    variant: {
      h1: "font-semibold text-base dark:text-white",
      h2: "font-semibold text-sm dark:text-white",
      body1: "font-semibold text-xs",
      body2: "font-semibold text-xs dark:text-white",
      body3: "font-semibold text-sm dark:text-white",
      p1: "text-sm",
      p2: "text-xs",
      p3: "text-sm dark:text-white",
      p4: "text-xs dark:text-white"
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