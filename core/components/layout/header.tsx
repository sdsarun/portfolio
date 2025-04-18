import { cn } from '@/core/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const headerVariants = cva("mx-auto", {
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

export type HeaderProps = React.ComponentPropsWithRef<"header"> & VariantProps<typeof headerVariants>;

export function Header({ className, width, padding, ...props }: HeaderProps) {
  return (
    <header
      className={cn(headerVariants({ width, padding }), className)}
      {...props}
    />
  );
}
