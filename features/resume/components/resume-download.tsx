// components
import { Typography } from "@/shared/ui/typography";

// view-models
import { ResumeViewModel } from "@/features/resume/view-models/resume-model";

export type ResumeDownloadProps = {
  resume: ResumeViewModel;
};

export function ResumeDownload({ resume }: ResumeDownloadProps) {
  if (!resume.resumeLink) return null;

  return (
    <section>
      <Typography as="p" variant="p1">
        For full resume:{" "}
        <a
          href={resume.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline-wipe"
        >
          Download PDF
        </a>
      </Typography>
    </section>
  );
}
