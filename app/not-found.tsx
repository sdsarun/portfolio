// core
import type { Metadata } from "next";

// components
import Link from "next/link";
import { Main } from "@/shared/layout/main";
import { Typography } from "@/shared/ui/typography";
import { FadeIn } from "@/shared/animations/fade-in";
import { Separator } from "@/shared/ui/separator";

// constants
import { Routes } from "@/shared/constants/routes";

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
