import { cn } from '@/core/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const boxVariants = cva("mx-auto", {
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

export type BoxProps = React.ComponentPropsWithRef<"div"> & VariantProps<typeof boxVariants>;

export function Box({ className, width, padding, ...props }: BoxProps) {
  return (
    <div
      className={cn(boxVariants({ width, padding }), className)}
      {...props}
    />
  );
}
