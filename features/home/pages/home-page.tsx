// components
import { Main } from "@/shared/layout/main";
import { FadeIn } from "@/shared/animations/fade-in";
import { Separator } from "@/shared/ui/separator";
import { HomHeader } from "@/features/home/components/home-header";
import { HomeBio } from "@/features/home/components/home-bio";

// actions
import { getProfile } from "@/features/profile/actions/get-profile-action";

export default async function HomePage() {
  const profile = await getProfile();
  const home = profile?.home;
  return (
    <Main width="sm">
      <FadeIn>
        <HomHeader displayName={home?.displayName} roleName={home?.roleName} />
      </FadeIn>
      <FadeIn>
        <Separator />
      </FadeIn>
      <FadeIn>
        <HomeBio title={home?.bioTitle} description={home?.bioDescription} />
      </FadeIn>
      <FadeIn>
        <Separator />
      </FadeIn>
    </Main>
  );
}
