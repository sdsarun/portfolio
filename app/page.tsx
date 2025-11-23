// core
import { Metadata } from "next";

// components
import { Main } from "@/core/components/layout/main";
import { Typography } from "@/core/components/ui/typography";
import { FadeIn } from "@/core/components/wrapper/fade-in";
import { Separator } from "@/core/components/ui/separator";

export const metadata: Metadata = {
  title: "sdsarun | home"
};

export default function Home() {
  return (
    <Main width="sm">
      <FadeIn>
        <div className="py-[20rem] flex flex-col gap-1">
          <Typography as="h1">Sarun Daunghirun</Typography>
          <Typography as="p" variant="p2" className="italic">
            Software Developer
          </Typography>
        </div>
      </FadeIn>
      <FadeIn>
        <Separator />
      </FadeIn>
      <FadeIn>
        <Typography as="h2" variant="h2" className="mt-10">
          Who&apos;s Here!
        </Typography>
      </FadeIn>
      <FadeIn>
        <Typography as="p" variant="p1" className="my-10">
          I&apos;m a fullstack developer with a love for clean UI, minimal design, and smooth UX. I build
          with Next.js, NestJS, and everything in between. Outside of coding, I’m into cycling, tech, and
          small side projects. This site is a simple showcase of personal experiments, client work, and
          things I’ve been tinkering with—some polished, some still baking. Built with passion,
          curiosity, and way too many late nights. Feel free to explore what I&apos;ve been up to below.
        </Typography>
      </FadeIn>
      <FadeIn>
        <Separator />
      </FadeIn>
    </Main>
  );
}
