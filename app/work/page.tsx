// core
import React from 'react'
import { Metadata } from 'next'

// components
import { Box } from '@/core/components/layout/box'
import { Main } from '@/core/components/layout/main'
import { Separator } from '@/core/components/ui/separator'
import { WorkOverview, type WorkOverviewProps } from '@/core/components/ui/work-overview'
import { FadeIn } from '@/core/components/wrapper/fade-in'
import { Typography } from '@/core/components/ui/typography'

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
        label: "In Progress"
      },
      {
        label: "Live",
        href: "https://chatio-front.vercel.app"
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
    imageProps: {
      src: "https://raw.githubusercontent.com/sdsarun/assets/refs/heads/main/screenshots/portfolio/no-more-random-ad.png",
      width: 900,
      height: 700,
      alt: "No More Random AD Image"
    },
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
    imageProps: {
      src: "https://raw.githubusercontent.com/sdsarun/assets/refs/heads/main/screenshots/portfolio/coastal-sea-depth.png",
      width: 900,
      height: 700,
      alt: "Coastal Sea Depth Image"
    },
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
    imageProps: {
      src: "https://raw.githubusercontent.com/sdsarun/assets/refs/heads/main/screenshots/portfolio/xx-portfolio.png",
      width: 900,
      height: 700,
      alt: "XX Portfolio Image"
    },
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
        href: "https://github.com/sdsarun/xx-portfolio"
      }
    ]
  }
]

export default function WorkPage() {
  return (
    <Main width="full" padding="none">
      <FadeIn>
        <Box as='section' className='py-[10rem] flex flex-col gap-1'>
          <Typography as='h1'>Showcasing My Work and Passion Projects</Typography>
          <Typography as="p" variant='p2' className='text-muted-foreground'>
            Not every project here is groundbreaking. Some are just me practicing new tricks, testing my limits, or just having fun while learning. But hey, every line of code counts!
          </Typography>
        </Box>
      </FadeIn>
      <FadeIn>
        <Box as="section" className='flex flex-col gap-10' padding="none" width="full">
          {worksData.map((workProps, idx) => (
            <FadeIn key={workProps.title}>
              <WorkOverview {...workProps} />
              {idx !== worksData.length - 1 && (
                <Box width="responsive" className='mt-10 sm:hidden'>
                  <Separator className='' />
                </Box>
              )}
            </FadeIn>
          ))}
        </Box>
      </FadeIn>
      <FadeIn>
        <Box className='mt-10'>
          <Separator />
        </Box>
      </FadeIn>
    </Main>
  )
}
