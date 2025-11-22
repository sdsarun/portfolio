// core
import React from "react";

// components
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { Box } from "@/core/components/layout/box";
import { Typography } from "@/core/components/ui/typography";
import { Badge } from "@/core/components/ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";

// utils
import { cn } from "@/core/lib/utils";

export type WorkOverviewMetaItem = {
  label: string;
  href?: string;
};

export type WorkOverviewProps = {
  imageProps?: ImageProps;
  rootImageProps?: React.ComponentProps<"figure">;
  rootClassName?: string;
  title?: string;
  description?: string;
  metadata?: WorkOverviewMetaItem[];
  badges?: string[];
};

export function WorkOverview({
  rootClassName,
  imageProps,
  rootImageProps,
  title,
  description,
  metadata,
  badges
}: WorkOverviewProps) {
  return (
    <section className={cn("flex flex-col gap-16", rootClassName)}>
      <Box width="responsive" className="flex flex-col gap-4 sm:flex-row">
        <Box
          width="full"
          padding="none"
          className="flex-1/3 space-y-4 order-last md:space-y-0 sm:order-first sm:block"
        >
          {metadata?.map((item, idx) => (
            <Typography as="p" variant="p1" key={item.label + idx}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:underline inline-flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                  <SquareArrowOutUpRight size={16} />
                </Link>
              ) : (
                item.label
              )}
            </Typography>
          ))}
        </Box>
        <Box width="full" padding="none" className="flex-2/3 flex flex-col gap-4">
          <Typography as="h1" variant="h2" className="flex items-center gap-2">
            {title}
          </Typography>
          <Typography as="p" variant="p1">
            {description}
          </Typography>
          {badges && (
            <div className="flex items-center gap-1 flex-wrap">
              {badges.map((badge, idx) => (
                <Badge variant="secondary" key={badge + idx} className="text-muted-foreground">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </Box>
      </Box>
      {imageProps && (
        <figure
          {...rootImageProps}
          className={cn("flex items-center justify-center px-4", rootImageProps?.className)}
        >
          <Image
            {...imageProps}
            className={cn("rounded-sm shadow-xl", imageProps?.className)}
            src={imageProps.src}
            alt={imageProps.alt}
          />
        </figure>
      )}
    </section>
  );
}
