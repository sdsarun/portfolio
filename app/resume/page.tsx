// core
import { type Metadata } from "next";

// components
import { Main } from "@/core/components/layout/main";
import { FadeIn } from "@/core/components/animations/fade-in";
import { Typography } from "@/core/components/ui/typography";
import { Separator } from "@/core/components/ui/separator";
import { Badge } from "@/core/components/ui/badge";

// actions
import { getProfile } from "@/core/actions/profile/get-profile-action";

export const revalidate = 3600; // in seconds

export const metadata: Metadata = {
  title: "resume"
};

export default async function ResumePage() {
  const profile = await getProfile();
  const resumeData = profile?.resume;
  return (
    <Main>
      <FadeIn>
        <section className="my-[10rem] flex flex-col gap-1">
          {resumeData?.name && <Typography as="h1">{resumeData?.name}</Typography>}
          {resumeData?.title && (
            <Typography as="h2" variant="p1">
              {resumeData?.title}
            </Typography>
          )}
          {resumeData?.subtitle && (
            <Typography as="p" variant="p1" className="italic">
              {resumeData?.subtitle}
            </Typography>
          )}
        </section>
      </FadeIn>

      <div className="mb-[10rem] flex flex-col gap-8 max-w-2xl mx-auto text-left">
        <FadeIn>
          <section>
            <Typography>Work Experience</Typography>
            <Separator className="my-4" />
            <section className="flex flex-col gap-2">
              {resumeData?.workExperience?.map?.((exp) => (
                <div key={exp.id}>
                  <Typography as="p" variant="body3">
                    {exp.position} | {exp.company}
                  </Typography>
                  <Typography as="p" variant="p1" className="italic">
                    {exp.duration}
                  </Typography>
                  <ul className="list-disc ml-5">
                    {exp.responsibilities.map((res, j) => (
                      <li key={j}>
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
        </FadeIn>

        <FadeIn>
          <section>
            <Typography>Skills</Typography>
            <Separator className="my-4" />
            <div className="flex flex-col gap-2">
              {Object.entries(resumeData?.skills || []).map(([topicSkill, listSkill]) => (
                <div key={topicSkill} className="flex flex-col sm:flex-row gap-1">
                  <Typography as="p" variant="p1" className="flex-1/3">
                    {topicSkill}:
                  </Typography>
                  <div className="flex-2/3">
                    {listSkill.map((val, i) => (
                      <Badge key={i} variant="secondary">
                        {val}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <Typography>Education</Typography>
            <Separator className="my-4" />
            {resumeData?.education?.map?.((edu, i) => (
              <Typography key={i} as="p" variant="p1">
                {edu.degree}, {edu.school} <em>{edu.duration}</em>
              </Typography>
            ))}
          </section>
        </FadeIn>

        <FadeIn>
          <section>
            <Typography>Certifications</Typography>
            <Separator className="my-4" />
            {resumeData?.certifications?.map?.((cert, i) => (
              <Typography key={i} as="p" variant="p1">
                {cert}
              </Typography>
            ))}
          </section>
        </FadeIn>

        <FadeIn>
          <Separator />
        </FadeIn>

        <FadeIn>
          <section>
            <Typography as="p" variant="p1">
              For full resume:{" "}
              <a
                href={resumeData?.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline-wipe"
              >
                Download PDF
              </a>
            </Typography>
          </section>
        </FadeIn>
      </div>

      <Separator />
    </Main>
  );
}
