// core
import React from "react";
import { Metadata } from "next";

// components
import { Main } from "@/core/components/layout/main";
import { FadeIn } from "@/core/components/wrapper/fade-in";
import { Typography } from "@/core/components/ui/typography";
import { Separator } from "@/core/components/ui/separator";
import { Badge } from "@/core/components/ui/badge";

export const metadata: Metadata = {
  title: "resume"
};

const resumeData = {
  name: "Sarun Daunghirun",
  title: "Software Developer",
  subtitle: "",
  workExperience: [
    {
      position: "Application Developer",
      company: "TCC Technology",
      duration: "(Jul 2025 - Present)",
      responsibilities: [
        "Developed a sustainability management platform for internal use.",
        "Guided junior developers through pair programming, code reviews, and day-to-day technical mentorship.",
        "Developed micro-frontend using Webpack Module Federation with React.",
        "Developed and published a shared React UI component library as an npm package, used across multiple micro-frontend applications."
      ]
    },
    {
      position: "Software Developer",
      company: "Synergy Global Network",
      duration: "(August 2023 - Jul 2025)",
      responsibilities: [
        "Developed a LINE LIFF application for a customer CRM system using Vite and React.",
        "Built APIs and backend logic across multiple projects using NestJS and PostgreSQL.",
        "Stepped into my first lead role, helping define features with the project manager and guiding junior developers on what to build."
      ]
    }
  ],
  skills: {
    "Programming Languages": ["TypeScript", "JavaScript"],
    "Libraries / Frameworks": [
      "React",
      "NextJS",
      "NestJS",
      "Mapbox",
      "Antd",
      "Tanstack Query",
      "Vitest",
      "Jest",
      "SocketIO",
      "GraphQL"
    ],
    "Tools / Platforms": ["Git", "GitLab", "Docker", "Keycloak", "MinIO", "Swagger", "VIM"],
    Databases: ["PostgreSQL"]
  },
  education: [
    {
      degree: "B.Sc. Computer Science",
      school: "Sukhothai Thammathirat Open University",
      duration: "(2018 - 2023)"
    }
  ],
  certifications: ["Junior Software Developer (Generation Thailand)"],
  resumeLink: "https://drive.google.com/file/d/1YGoDFuydt_821xUvxPqbKZKrrxohZk9c/view"
};

export default function ResumePage() {
  return (
    <Main>
      <FadeIn>
        <section className="my-[10rem] flex flex-col gap-1">
          <Typography as="h1">{resumeData.name}</Typography>
          <Typography as="h2" variant="p1">
            {resumeData.title}
          </Typography>
          {/* <Typography as="p" variant="p1" className="italic">
            {resumeData.subtitle}
          </Typography> */}
        </section>
      </FadeIn>

      <div className="mb-[10rem] flex flex-col gap-8 max-w-2xl mx-auto text-left">
        <FadeIn>
          <section>
            <Typography>Work Experience</Typography>
            <Separator className="my-4" />
            <section className="flex flex-col gap-2">
              {resumeData.workExperience.map((exp, i) => (
                <div key={exp.company + exp.position + i}>
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
              {Object.entries(resumeData.skills).map(([topicSkill, listSkill]) => (
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
            {resumeData.education.map((edu, i) => (
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
            {resumeData.certifications.map((cert, i) => (
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
                href={resumeData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
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
