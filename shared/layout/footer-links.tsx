"use client";

// core
import { usePathname } from "next/navigation";

// components
import Link from "next/link";
import { Typography } from "@/shared/ui/typography";

// constants
import { Routes } from "@/shared/constants/routes";

// utils
import { cn } from "@/shared/ui/class-merge";
import { FadeIn } from "@/shared/animations/fade-in";

export function FooterLinks() {
  const activePathname = usePathname();
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(Routes).map(([name, href], index) => (
        <FadeIn key={name} delay={100 * index}>
          <Typography variant="p1">
            <Link
              href={href}
              className={cn("link-underline-wipe", {
                "after:scale-x-100": activePathname === href
              })}
            >
              {name}
            </Link>
          </Typography>
        </FadeIn>
      ))}
    </div>
  );
}
