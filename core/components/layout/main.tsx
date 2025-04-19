import { cn } from '@/core/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const mainVariants = cva("mx-auto", {
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

export type MainProps = React.ComponentPropsWithRef<"main"> & VariantProps<typeof mainVariants>;

export function Main({ className, width, padding, ...props }: MainProps) {
  return (
    <main
      className={cn(mainVariants({ width, padding }), className)}
      {...props}
    />
  );
}
