"use client"

// core
import { useState } from 'react'
import { usePathname } from 'next/navigation'

// components
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/core/components/ui/dropdown-menu'
import { ThemeSwitcher } from '@/core/components/ui/theme-switcher'
import { Typography } from '@/core/components/ui/typography'
import { Routes } from '@/core/constants/routes'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

// utils
import { cn } from '@/core/lib/utils'

export function Navbar() {
  const activePathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  let pathnameFormatted = "";
  if (!Object.values(Routes).includes(activePathname as Routes)) {
    pathnameFormatted = "not found"
  } else {
    pathnameFormatted = activePathname === "/" ? "home" : activePathname.replace("/", "");
  }

  return (
    <nav className='flex items-center justify-between'>
      <div className='flex items-baseline gap-3'>
        <Typography variant="p2">
          <Link href={Routes.Home} className='hover:underline'>sD</Link>
        </Typography>
        <Typography variant="p2">/</Typography>
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger asChild>
            <div className='flex items-center gap-1 cursor-pointer hover:underline'>
              <Typography variant="body2">{pathnameFormatted}</Typography>
              <ChevronDown
                className={cn("transition-all transform duration-300 dark:text-white", { "rotate-x-180": isMenuOpen })}
                size={16}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Object.entries(Routes).map(([name, href]) => (
              <DropdownMenuItem key={name} asChild className='cursor-pointer'>
                <Link href={href} className='flex items-center justify-between'>
                  {name}
                  {/* <ArrowRight data-arrow-right /> */}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ThemeSwitcher />
    </nav>
  )
}
