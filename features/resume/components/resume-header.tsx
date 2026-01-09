// components
import { Typography } from "@/shared/ui/typography";

// view-models
import type { ResumeViewModel } from "@/features/resume/view-models/resume-model";

export type ResumeHeaderProps = {
  resume: ResumeViewModel;
};

export function ResumeHeader({ resume }: ResumeHeaderProps) {
  return (
    <section className="my-[10rem] flex flex-col gap-1">
      {resume.name && <Typography as="h1">{resume.name}</Typography>}
      {resume.title && (
        <Typography as="h2" variant="p1">
          {resume.title}
        </Typography>
      )}
      {resume.subtitle && (
        <Typography as="p" variant="p1" className="italic">
          {resume.subtitle}
        </Typography>
      )}
    </section>
  );
}
