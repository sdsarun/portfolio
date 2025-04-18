import { cn } from '@/core/lib/utils';
import React from 'react'

export type FooterProps = React.ComponentPropsWithRef<"footer">;

export function Footer({ className, ...props }: FooterProps) {
  return <footer className={cn("mx-auto sm:w-[700px]", className)} {...props} />
}
