// components
import { Typography } from "@/shared/ui/typography";
import { Separator } from "@/shared/ui/separator";

// view-models
import { ResumeViewModel } from "@/features/resume/view-models/resume-model";

export type ResumeEducationProps = {
  resume: ResumeViewModel;
};

export function ResumeEducation({ resume }: ResumeEducationProps) {
  if (resume.education.length === 0) return null;

  return (
    <section>
      <Typography>Education</Typography>
      <Separator className="my-4" />

      {resume.education.map((edu) => (
        <Typography key={edu.id} as="p" variant="p1">
          {edu.degree}, {edu.school} <em>{edu.duration}</em>
        </Typography>
      ))}
    </section>
  );
}
