// core
import React from 'react'
import { Metadata } from 'next'

// components
import { Box } from '@/core/components/layout/box'
import { Main } from '@/core/components/layout/main'
import { Separator } from '@/core/components/ui/separator'
import { WorkOverview, WorkOverviewProps } from '@/core/components/ui/work-overview'
import { FadeIn } from '@/core/components/wrapper/fade-in'

export const metadata: Metadata = {
  title: "work"
}

const worksData: WorkOverviewProps[] = [
  {
    title: "ChatIO",
    description: "A random chat alternative to find friends, connect with people, and chat with strangers.",
    badges: ["NextJS", "NestJS", "GraphQL", "SocketIO", "Postgres"],
    metadata: [
      {
        label: "2025"
      },
      {
        label: "Live",
        href: "https://chatio-front.onrender.com/"
      },
      {
        label: "Github Front",
        href: "https://github.com/sdsarun/chatio-front"
      },
      {
        label: "Github Back",
        href: "https://github.com/sdsarun/chatio-back"
      },
    ],
  },
  {
    title: "No More Random AD",
    description: "Generate random data without the annoyance of ads.",
    badges: ["NextJS", "Shadcn-UI"],
    metadata: [
      {
        label: "2025"
      },
      {
        label: "Live",
        href: "https://no-more-random-ad.vercel.app/"
      },
      {
        label: "GitHub",
        href: "https://github.com/sdsarun/no-more-random-ad"
      }
    ]
  },
  {
    title: "Coastal Sea Depth Platform",
    description: "Coastal depth survey data, enabling the display of various map layers, including base maps, satellite and digital elevation models (DEM).",
    badges: ["Vite", "NestJS", "RabbitMQ", "MinIO", "Postgres"],
    metadata: [
      {
        label: "2024"
      },
      {
        label: "Live",
        href: "https://coastalseadepth.com"
      }
    ],
  },
  {
    title: "xx-portfolio",
    description: "A personal portfolio showcasing projects, skills, and experience.",
    badges: ["Vite", "TailwindCSS"],
    metadata: [
      {
        label: "2023",
      },
      {
        label: "Live",
        href: "https://xx-portfolio.vercel.app/"
      },
      {
        label: "GitHub",
        href: "https://github.com/sdsarun/sd-portfolio"
      }
    ]
  }
]

export default function WorkPage() {
  return (
    <Main width="full" className='mt-10'>
      <Box className='flex flex-col gap-10'>
        {worksData.map((workProps) => (
          <FadeIn key={workProps.title}>
            <WorkOverview {...workProps} />
          </FadeIn>
        ))}
      </Box>

      <FadeIn>
        <Box className='mt-10'>
          <Separator />
        </Box>
      </FadeIn>
    </Main>
  )
}
