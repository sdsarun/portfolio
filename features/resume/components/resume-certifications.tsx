// components
import { Typography } from "@/shared/ui/typography";
import { Separator } from "@/shared/ui/separator";

// view-models
import { ResumeViewModel } from "@/features/resume/view-models/resume-model";

export type ResumeCertificationsProps = {
  resume: ResumeViewModel;
};

export function ResumeCertifications({ resume }: ResumeCertificationsProps) {
  if (resume.certifications.length === 0) return null;

  return (
    <section>
      <Typography>Certifications</Typography>
      <Separator className="my-4" />

      {resume.certifications.map((cert, i) => (
        <Typography key={i} as="p" variant="p1">
          {cert}
        </Typography>
      ))}
    </section>
  );
}
