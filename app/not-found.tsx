// core
import React from "react";
import { Metadata } from "next";

// components
import Link from "next/link";
import { Main } from "@/core/components/layout/main";
import { Typography } from "@/core/components/ui/typography";

// constants
import { Routes } from "@/core/constants/routes";
import { Separator } from "@/core/components/ui/separator";
import { FadeIn } from "@/core/components/animations/fade-in";

export const metadata: Metadata = {
  title: "not found"
};

export default function NotFoundPage() {
  return (
    <Main className="my-24">
      <FadeIn>
        <div className="flex flex-col gap-2">
          <Typography as="h1" variant="h1">
            404
          </Typography>
          <Typography as="h2" variant="body1">
            This page is playing hide and seek... and winning.
          </Typography>
          <Separator />
          <Typography as="div" variant="p1" className="mt-6">
            <Link href={Routes.Home} className="link-underline-wipe text-muted-foreground">
              Mission failed, try again
            </Link>
          </Typography>
        </div>
      </FadeIn>
    </Main>
  );
}
