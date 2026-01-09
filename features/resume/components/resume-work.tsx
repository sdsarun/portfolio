// components
import { Typography } from "@/shared/ui/typography";
import { Separator } from "@/shared/ui/separator";

// view-models
import type { ResumeViewModel } from "@/features/resume/view-models/resume-model";

export type ResumeWorkProps = {
  resume: ResumeViewModel;
};

export function ResumeWork({ resume }: ResumeWorkProps) {
  if (resume.workExperience.length === 0) return null;

  return (
    <section>
      <Typography>Work Experience</Typography>
      <Separator className="my-4" />

      <section className="flex flex-col gap-2">
        {resume.workExperience.map((exp) => (
          <div key={exp.id}>
            <Typography as="p" variant="body3">
              {exp.position} | {exp.company}
            </Typography>

            <Typography as="p" variant="p1" className="italic">
              {exp.duration}
            </Typography>

            <ul className="list-disc ml-5">
              {exp.responsibilities.map((res, i) => (
                <li key={i}>
                  <Typography as="p" variant="p1">
                    {res}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </section>
  );
}
