// components
import { Typography } from "@/shared/ui/typography";
import { Separator } from "@/shared/ui/separator";
import { Badge } from "@/shared/ui/badge";

// view-models
import { ResumeViewModel } from "@/features/resume/view-models/resume-model";

export type ResumeSkillsProps = {
  resume: ResumeViewModel;
};

export function ResumeSkills({ resume }: ResumeSkillsProps) {
  const entries = Object.entries(resume.skills);
  if (entries.length === 0) return null;

  return (
    <section>
      <Typography>Skills</Typography>
      <Separator className="my-4" />

      <div className="flex flex-col gap-2">
        {entries.map(([topic, list]) => (
          <div key={topic} className="flex flex-col sm:flex-row gap-1">
            <Typography as="p" variant="p1" className="flex-1/3">
              {topic}:
            </Typography>

            <div className="flex-2/3 flex flex-wrap gap-1">
              {list.map((val, i) => (
                <Badge key={i} variant="secondary">
                  {val}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
