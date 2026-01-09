// core
import { type Metadata } from "next";

// components
import { Main } from "@/core/components/layout/main";
import { Typography } from "@/core/components/ui/typography";
import { FadeIn } from "@/core/components/animations/fade-in";
import { Separator } from "@/core/components/ui/separator";

// actions
import { getProfile } from "@/core/actions/profile/get-profile-action";

export const revalidate = 3600; // in seconds

export const metadata: Metadata = {
  title: "sdsarun | home"
};

export default async function Home() {
  const profile = await getProfile();
  const profileData = profile?.home;
  return (
    <Main width="sm">
      <FadeIn>
        <div className="py-[20rem] flex flex-col gap-1">
          <Typography as="h1">{profileData?.displayName}</Typography>
          <Typography as="p" variant="p2" className="italic">
            {profileData?.roleName}
          </Typography>
        </div>
      </FadeIn>
      <FadeIn>
        <Separator />
      </FadeIn>
      <FadeIn>
        <Typography as="h2" variant="h2" className="mt-10">
          {profileData?.bioTitle}
        </Typography>
      </FadeIn>
      <FadeIn>
        <Typography as="p" variant="p1" className="my-10">
          {profileData?.bioDescription}
        </Typography>
      </FadeIn>
      <FadeIn>
        <Separator />
      </FadeIn>
    </Main>
  );
}
