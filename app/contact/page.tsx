// core
import React from 'react'

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
    <Main className='my-10'>
      <section className='flex flex-col gap-2'>
        {contacts.map((contact, idx) => (
          <FadeIn key={contact.label + idx}>
            <div className='flex flex-col gap-2'>
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
          </FadeIn>
        ))}
      </section>

      <FadeIn>
        <Separator className='mt-10' />
      </FadeIn>
    </Main>
  )
}
