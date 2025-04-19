import { cn } from '@/core/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const footerVariants = cva("mx-auto", {
  variants: {
    width: {
      sm: "sm:w-[700px]",
      full: "w-full",
    },
    padding: {
      none: "",
      default: "px-6",
    },
  },
  defaultVariants: {
    width: "sm",
    padding: "default",
  },
});

export type FooterProps = React.ComponentPropsWithRef<"footer"> & VariantProps<typeof footerVariants>;

export function Footer({ className, width, padding, ...props }: FooterProps) {
  return (
    <footer
      className={cn(footerVariants({ width, padding }), className)}
      {...props}
    />
  );
}
