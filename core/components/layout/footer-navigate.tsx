// core
import React from 'react'

// components
import Link from 'next/link'
import { Footer } from '@/core/components/layout/footer'
import { Routes } from '@/core/constants/routes'
import { Typography } from '@/core/components/ui/typography'

export function FooterNavigate() {
  return (
    <Footer className='mt-12 mb-56'>
      <div className='grid grid-cols-2 gap-4'>
        {Object.entries(Routes).map(([name, href]) => (
          <Typography key={name} variant="p1">
            <Link href={href} className='hover:underline'>
              {name}
            </Link>
          </Typography>
        ))}
      </div>
    </Footer>
  )
}
