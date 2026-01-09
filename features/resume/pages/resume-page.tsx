// components
import { Main } from "@/shared/layout/main";
import { FadeIn } from "@/shared/animations/fade-in";
import { Separator } from "@/shared/ui/separator";
import { ResumeHeader } from "@/features/resume/components/resume-header";
import { ResumeWork } from "@/features/resume/components/resume-work";
import { ResumeSkills } from "@/features/resume/components/resume-skills";
import { ResumeEducation } from "@/features/resume/components/resume-education";
import { ResumeCertifications } from "@/features/resume/components/resume-certifications";
import { ResumeDownload } from "@/features/resume/components/resume-download";

// actions
import { getProfile } from "@/features/profile/actions/get-profile-action";

export default async function ResumePage() {
  const profile = await getProfile();
  const resume = profile?.resume;
  return (
    <Main>
      <FadeIn>
        <ResumeHeader resume={resume} />
      </FadeIn>
      <div className="mb-[10rem] flex flex-col gap-8 max-w-2xl mx-auto text-left">
        <FadeIn>
          <ResumeWork resume={resume} />
        </FadeIn>
        <FadeIn>
          <ResumeSkills resume={resume} />
        </FadeIn>
        <FadeIn>
          <ResumeEducation resume={resume} />
        </FadeIn>
        <FadeIn>
          <ResumeCertifications resume={resume} />
        </FadeIn>
        <FadeIn>
          <Separator />
        </FadeIn>
        <FadeIn>
          <ResumeDownload resume={resume} />
        </FadeIn>
      </div>
      <FadeIn>
        <Separator />
      </FadeIn>
    </Main>
  );
}
