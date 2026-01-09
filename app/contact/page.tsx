// core
import React from "react";
import { Metadata } from "next";

// components
import Link from "next/link";
import { Main } from "@/core/components/layout/main";
import { Separator } from "@/core/components/ui/separator";
import { Typography } from "@/core/components/ui/typography";
import { FadeIn } from "@/core/components/animations/fade-in";

// actions
import { getProfile } from "@/core/actions/profile/get-profile-action";

export const revalidate = 3600; // in seconds

export const metadata: Metadata = {
  title: "contact"
};

export default async function ContactPage() {
  const profile = await getProfile();
  const contactsData = profile?.contacts || [];
  return (
    <Main>
      <FadeIn>
        <section className="py-[10rem] flex flex-col gap-1">
          <Typography as="h1">Got something to say? Me too.</Typography>
          <Typography as="p" variant="p2" className="text-muted-foreground">
            Whether it&apos;s work, play, or “this code won&apos;t run,” I&apos;m just one dramatic email
            away. Hit me up!
          </Typography>
        </section>
        <section className="pb-[20rem] flex flex-col gap-2">
          {contactsData?.map?.((contact, idx) => (
            <div key={contact.label + idx} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Typography variant="p1">{contact.label}</Typography>
                <Typography variant="p3">
                  <Link
                    href={contact.href}
                    target={contact.type === "email" ? undefined : "_blank"}
                    rel={contact.type === "email" ? undefined : "noopener noreferrer"}
                    className="link-underline-wipe"
                  >
                    {contact.display}
                  </Link>
                </Typography>
              </div>
              {idx !== contactsData?.length - 1 && <Separator />}
            </div>
          ))}
        </section>
        <Separator />
      </FadeIn>
    </Main>
  );
}
