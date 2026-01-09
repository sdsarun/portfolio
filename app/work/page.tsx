// core
import { type Metadata } from "next";

// components
import { Box } from "@/core/components/layout/box";
import { Main } from "@/core/components/layout/main";
import { Separator } from "@/core/components/ui/separator";
import { WorkOverview } from "@/core/components/ui/work-overview";
import { FadeIn } from "@/core/components/animations/fade-in";
import { Typography } from "@/core/components/ui/typography";

// actions
import { getProfile } from "@/core/actions/profile/get-profile-action";

export const revalidate = 3600; // in seconds

export const metadata: Metadata = {
  title: "work"
};

export default async function WorkPage() {
  const profile = await getProfile();
  const worksData = profile?.work || [];
  return (
    <Main width="full" padding="none">
      <FadeIn>
        <Box as="section" className="py-[10rem] flex flex-col gap-1">
          <Typography as="h1">Showcasing My Work and Passion Projects</Typography>
          <Typography as="p" variant="p2" className="text-muted-foreground">
            Not every project here is groundbreaking. Some are just me practicing new tricks, testing my
            limits, or just having fun while learning. But hey, every line of code counts!
          </Typography>
        </Box>
      </FadeIn>
      <FadeIn>
        <Box as="section" className="flex flex-col gap-10" padding="none" width="full">
          {worksData.map((workProps, idx) => (
            <FadeIn key={workProps.title}>
              <WorkOverview {...workProps} />
              {idx !== worksData.length - 1 && (
                <Box width="responsive" className="mt-10 sm:hidden">
                  <Separator />
                </Box>
              )}
            </FadeIn>
          ))}
        </Box>
      </FadeIn>
      <FadeIn>
        <Box className="mt-10">
          <Separator />
        </Box>
      </FadeIn>
    </Main>
  );
}
