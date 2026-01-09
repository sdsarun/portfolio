// components
import { Box } from "@/shared/layout/box";
import { Main } from "@/shared/layout/main";
import { Separator } from "@/shared/ui/separator";
import { FadeIn } from "@/shared/animations/fade-in";
import { WorkHeader } from "@/features/work/components/work-header";
import { WorkList } from "@/features/work/components/work-list";

// actions
import { getProfile } from "@/features/profile/actions/get-profile-action";

export default async function WorkPage() {
  const profile = await getProfile();
  const works = profile?.work || [];
  return (
    <Main width="full" padding="none">
      <FadeIn>
        <WorkHeader />
      </FadeIn>
      <FadeIn>
        <WorkList works={works} />
      </FadeIn>
      <FadeIn>
        <Box className="mt-10">
          <Separator />
        </Box>
      </FadeIn>
    </Main>
  );
}
