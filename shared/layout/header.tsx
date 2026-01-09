// core
import React from "react";

// ui
import { cn } from "@/shared/ui/class-merge";
import { cva, type VariantProps } from "class-variance-authority";

const headerVariants = cva("mx-auto", {
  variants: {
    width: {
      sm: "sm:w-[700px]",
      full: "w-full"
    },
    padding: {
      none: "",
      default: "px-6"
    }
  },
  defaultVariants: {
    width: "sm",
    padding: "default"
  }
});

export type HeaderProps = React.ComponentPropsWithRef<"header"> & VariantProps<typeof headerVariants>;

export function Header({ className, width, padding, ...props }: HeaderProps) {
  return <header className={cn(headerVariants({ width, padding }), className)} {...props} />;
}
