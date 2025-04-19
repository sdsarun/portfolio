// core
import React from 'react'
import { Metadata } from 'next'

// components
import Link from 'next/link'
import { Main } from '@/core/components/layout/main'
import { Separator } from '@/core/components/ui/separator'
import { Typography } from '@/core/components/ui/typography'
import { FadeIn } from '@/core/components/wrapper/fade-in'

type Contact = {
  label: string;
  display: string;
  type: 'email' | 'link';
  href: string;
};

export const metadata: Metadata = {
  title: "contact"
}

const contacts: Contact[] = [
  {
    type: "email",
    label: "Email",
    href: 'mailto:sdsarun@outlook.com',
    display: "sdsarun@outlook.com"
  },
  {
    type: "link",
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sdsarun',
    display: 'linkedin.com/in/sdsarun',
  },
  {
    type: "link",
    label: 'GitHub',
    href: 'https://github.com/sdsarun',
    display: 'github.com/sdsarun',
  },
];

export default function ContactPage() {
  return (
    <Main>
      <FadeIn>
        <section className='py-[10rem] flex flex-col gap-1'>
          <Typography as='h1'>Got something to say? Me too.</Typography>
          <Typography as="p" variant='p2' className='text-muted-foreground'>
            Whether it&apos;s work, play, or “this code won&apos;t run,” I&apos;m just one dramatic email away. Hit me up!
          </Typography>
        </section>
        <section className='pb-[20rem] flex flex-col gap-2'>
          {contacts.map((contact, idx) => (
            <div key={contact.label + idx} className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <Typography variant="p1">{contact.label}</Typography>
                <Typography variant="p3" className='hover:underline'>
                  <Link
                    href={contact.href}
                    target={contact.type === "email" ? undefined : "_blank"}
                    rel={contact.type === "email" ? undefined : "noopener noreferrer"}
                  >
                    {contact.display}
                  </Link>
                </Typography>
              </div>
              {idx !== contacts.length - 1 && <Separator />}
            </div>
          ))}
        </section>
        <Separator />
      </FadeIn>
    </Main>
  )
}
