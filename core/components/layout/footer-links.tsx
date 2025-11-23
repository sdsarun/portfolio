"use client";

// core
import { usePathname } from "next/navigation";

// components
import Link from "next/link";
import { Typography } from "@/core/components/ui/typography";

// constants
import { Routes } from "@/core/constants/routes";

// utils
import { cn } from "@/core/lib/utils";

export function FooterLinks() {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(Routes).map(([name, href]) => (
        <Typography key={name} variant="p1">
          <Link
            href={href}
            className={cn(
              "link-underline-wipe",
              {
                "after:scale-x-100": pathname === href,
              }
            )}
          >
            {name}
          </Link>
        </Typography>
      ))}
    </div>
  );
}
