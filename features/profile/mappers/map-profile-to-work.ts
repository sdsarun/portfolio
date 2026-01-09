// view-models
import type { WorkViewModel } from "@/features/work/view-models/work-model";

// dto
import type {
  GetProfileResponse,
  ProjectExperienceAggregate
} from "@/features/profile/dto/get-profile-response";

export function mapProfileToWork(data: GetProfileResponse): WorkViewModel[] {
  const { projectExperiences = [] } = data;
  return projectExperiences.map((project) => {
    const metadata: WorkViewModel["metadata"] = [
      ...buildDateMetadata(project),
      ...buildProgressMetadata(project),
      ...buildLinkMetadata(project)
    ];
    const imageProps = buildImageProps(project);
    return {
      title: project.title?.trim() || "",
      description: project.description?.trim() || "",
      badges: project.tags?.split(","),
      metadata,
      imageProps
    };
  });
}

function buildDateMetadata(project: ProjectExperienceAggregate) {
  const years = [
    project.startDate && new Date(project.startDate).getFullYear(),
    project.endDate && new Date(project.endDate).getFullYear()
  ].filter(Boolean);
  return years.length > 0 ? [{ label: years.join("-") }] : [];
}

function buildProgressMetadata(project: ProjectExperienceAggregate) {
  return project.isInProgress ? [{ label: "In Progress" }] : [];
}

function buildLinkMetadata(project: ProjectExperienceAggregate) {
  return (project.links ?? []).flatMap((link) =>
    link.name && link.url ? [{ label: link.name, href: link.url }] : []
  );
}

function buildImageProps(project: ProjectExperienceAggregate) {
  const attachment = project.attachments?.[0];
  if (!attachment?.name || !attachment.streamUrl) return undefined;
  return {
    alt: attachment.name,
    src: attachment.streamUrl,
    width: 900,
    height: 700
  };
}
