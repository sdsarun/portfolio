import { cn } from "@/core/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

type ParagraphProps = React.ComponentPropsWithRef<"p">

function Paragraph({ className, ...props }: ParagraphProps) {
  return <p className={cn("text-sm", className)} {...props} />
}

const headingVariants = cva("font-bold tracking-tight", {
  variants: {
    variant: {
      h1: "text-base",
      h2: "text-sm",
    },
  },
  defaultVariants: {
    variant: "h1"
  },
})

type HeadingProps = React.ComponentPropsWithRef<"h1"> & VariantProps<typeof headingVariants>

function Heading({ className, variant = "h1", ...props }: HeadingProps) {
  const Comp = variant as React.ElementType
  return (
    <Comp className={cn(headingVariants({ variant }), className)} {...props} />
  )
}

export {
  type ParagraphProps,
  Paragraph,
  type HeadingProps,
  Heading
}