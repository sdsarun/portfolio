// components
import { Typography } from "@/shared/ui/typography";

export function ContactHeader() {
  return (
    <section className="py-[10rem] flex flex-col gap-1">
      <Typography as="h1">Got something to say? Me too.</Typography>
      <Typography as="p" variant="p2" className="text-muted-foreground">
        Whether it&apos;s work, play, or “this code won&apos;t run,” I&apos;m just one dramatic email
        away. Hit me up!
      </Typography>
    </section>
  );
}
