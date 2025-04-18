import { cn } from '@/core/lib/utils';
import React from 'react'

export type MainProps = React.ComponentPropsWithRef<"main">;

export function main({ className, ...props }: MainProps) {
  return <main className={cn("mx-auto sm:w-[700px]", className)} {...props} />
}
