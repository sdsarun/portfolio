// components
import { ThemeSwitcher } from '@/core/components/ui/theme-switcher'
import { FadeIn } from '@/core/components/wrapper/fade-in'
import Link from 'next/link'

export function Navbar() {
  return (
    <FadeIn>
      <nav>
        <Link href={"/"} className='dark:text-gray-200'>sarun</Link>
        <ThemeSwitcher />
      </nav>
    </FadeIn>
  )
}
