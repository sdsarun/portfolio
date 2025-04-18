import { cn } from '@/core/lib/utils';
import React from 'react'

export type HeaderProps = React.ComponentPropsWithRef<"header">;

export function Header({ className, ...props }: HeaderProps) {
  return <header className={cn("mx-auto sm:w-[700px]", className)} {...props} />
}
