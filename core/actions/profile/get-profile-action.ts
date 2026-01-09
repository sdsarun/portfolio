"use server";

// components
import { type WorkOverviewProps } from "@/core/components/ui/work-overview";

// lib
import { portfolioApi } from "@/core/lib/http/server-http-client";
import { DateFormatter } from "@/core/lib/formatter/date-formatter";
import { RedisCache } from "@/core/lib/cache/cache-client";
import { CacheKeys } from "@/core/lib/cache/cache-keys";

type ProjectExperienceAttributes = {
  id: string | null;
  profileId: string | null;
  title: string | null;
  isInProgress: boolean | null;
  startDate: string | null;
  endDate: string | null;
  description: string | null;
  tags: string | null;
  displayOrder: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
};

type ProjectLinkAttributes = {
  id: string | null;
  projectId: string | null;
  name: string | null;
  url: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
};

type AttachmentAttributes = {
  id: string | null;
  name: string | null;
  storageType: string | null;
  storageProvider: string | null;
  size: number | null;
  mime: string | null;
  sha: string | null;
  storedPath: string | null;
  streamUrl: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
};

type ProfileAttributes = {
  authId: string | null;
  id: string | null;
  displayName: string | null;
  roleName: string | null;
  bioTitle: string | null;
  bioDescription: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  resumeUrl: string | null;
  siteUrl: string | null;
};

type ProjectExperienceAggregate = ProjectExperienceAttributes & {
  links: ProjectLinkAttributes[];
  attachments: AttachmentAttributes[];
};

type WorkExperienceAttributes = {
  id: string | null;
  profileId: string | null;
  jobTitle: string | null;
  companyName: string | null;
  startDate: string | null;
  endDate: string | null;
  isCurrent: boolean | null;
  description: string | null;
  displayOrder: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
};

type SkillAttributes = {
  id: string | null;
  profileId: string | null;
  categoryName: string | null;
  skillNames: string | null;
  displayOrder: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
};

type EducationAttributes = {
  id: string | null;
  profileId: string | null;
  major: string | null;
  institution: string | null;
  startDate: string | null;
  endDate: string | null;
  displayOrder: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
};

type ContactAttributes = {
  id: string | null;
  profileId: string | null;
  type: string | null;
  value: string | null;
  label: string | null;
  displayValue: string | null;
  displayOrder: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
};

type CertificationAttributes = {
  id: string | null;
  profileId: string | null;
  name: string | null;
  issuer: string | null;
  completeDate: string | null;
  displayOrder: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
};

type GetProfileResponse = {
  profile: ProfileAttributes | null;
  workExperiences: WorkExperienceAttributes[];
  projectExperiences: ProjectExperienceAggregate[];
  skills: SkillAttributes[];
  education: EducationAttributes[];
  certification: CertificationAttributes[];
  contacts: ContactAttributes[];
};

type HomeViewModel = Pick<ProfileAttributes, "displayName" | "roleName" | "bioTitle" | "bioDescription">;

type WorkViewModel = Pick<
  WorkOverviewProps,
  "title" | "description" | "badges" | "metadata" | "imageProps"
>;

type ResumeViewModel = {
  name: string;
  title: string;
  subtitle: string;
  workExperience: {
    id: string;
    position: string;
    company: string;
    duration: string;
    responsibilities: string[];
  }[];
  skills: Record<string, string[]>;
  education: { id: string; degree: string; school: string; duration: string }[];
  certifications: string[];
  resumeLink: string;
};

type ContactViewModel = {
  label: string;
  display: string;
  type: string;
  href: string;
};

type GetProfileOutput = {
  home: HomeViewModel;
  work: WorkViewModel[];
  resume: ResumeViewModel;
  contacts: ContactViewModel[];
};

export async function getProfile(): Promise<GetProfileOutput | null> {
  try {
    const cache = RedisCache.getInstance();
    const getProfileCacheKey = CacheKeys.profile.all();
    const profileDataCached = await cache.get<GetProfileOutput | null>(getProfileCacheKey);
    if (profileDataCached) {
      return profileDataCached;
    }

    const response = await portfolioApi("/v1/profile");

    const profileData = (await response.json()) as GetProfileResponse;
    const {
      profile,
      projectExperiences = [],
      workExperiences = [],
      certification = [],
      contacts = [],
      education = [],
      skills = []
    } = profileData || {};

    const output: GetProfileOutput = {
      home: {
        displayName: profile?.displayName?.trim() || null,
        roleName: profile?.roleName?.trim() || null,
        bioTitle: profile?.bioTitle?.trim() || null,
        bioDescription: profile?.bioDescription?.trim() || null
      },
      work:
        projectExperiences?.map<WorkViewModel>((project) => {
          const metadata: WorkViewModel["metadata"] = [];
          let imageProps: WorkViewModel["imageProps"];

          const projectDateRange: string[] = [];
          if (project?.startDate) {
            projectDateRange.push(new Date(project?.startDate).getFullYear().toString());
          }

          if (project?.endDate) {
            projectDateRange.push(new Date(project?.endDate).getFullYear().toString());
          }

          if (projectDateRange.length > 0) {
            metadata.push({ label: projectDateRange.join("-") });
          }

          if (project?.isInProgress) {
            metadata.push({ label: "In Progress" });
          }

          if (Array.isArray(project?.links) && project?.links?.length > 0) {
            for (const link of project.links) {
              if (link?.name && link?.url) {
                metadata.push({
                  label: link.name,
                  href: link.url
                });
              }
            }
          }

          if (Array.isArray(project?.attachments) && project?.attachments?.length > 0) {
            const [attachment] = project.attachments;
            if (attachment.name && attachment.streamUrl) {
              imageProps = {
                alt: attachment.name,
                src: attachment.streamUrl,
                width: 900,
                height: 700
              };
            }
          }

          return {
            title: project?.title?.trim() || "",
            description: project?.description?.trim() || "",
            badges: project.tags?.split(","),
            metadata,
            imageProps
          };
        }) || [],
      resume: {
        name: profile?.displayName || "",
        title: profile?.roleName || "",
        subtitle: "",
        workExperience: workExperiences.map((work, index) => {
          let duration: string = "";
          if (work?.startDate && work?.endDate) {
            const startDateFormatted = DateFormatter.format(work?.startDate, {
              month: "short",
              year: "numeric"
            });
            const endDateFormatted = DateFormatter.format(work?.endDate, {
              month: "short",
              year: "numeric"
            });
            duration = `${startDateFormatted} - ${endDateFormatted}`;
          } else {
            const effectiveDate = work?.startDate ?? work?.endDate;

            if (work?.isCurrent) {
              duration = "Present";
            }

            if (effectiveDate) {
              const effectiveDateFormatted = DateFormatter.format(effectiveDate, {
                month: "short",
                year: "numeric"
              });
              duration = `${effectiveDateFormatted} - ${duration}`;
            }
          }
          return {
            id: work?.id || index.toString(),
            company: work?.companyName?.trim() || "",
            duration,
            position: work?.jobTitle?.trim() || "",
            responsibilities: work?.description?.split("\n") || []
          };
        }),
        certifications: certification
          ?.map((cert) => {
            let certName: string = "";
            if (cert?.name) {
              certName = cert.name;
            }
            if (cert?.issuer) {
              certName += ` (${cert.issuer})`;
            }
            return certName.trim();
          })
          .filter(Boolean),
        education: education?.map((education, index) => {
          let duration: string = "";
          if (education?.startDate && education?.endDate) {
            const startDateFormatted = DateFormatter.format(education?.startDate, {
              year: "numeric"
            });
            const endDateFormatted = DateFormatter.format(education?.endDate, {
              year: "numeric"
            });
            duration = `(${startDateFormatted} - ${endDateFormatted})`;
          } else {
            const effectiveDate = education?.startDate ?? education?.endDate;
            if (effectiveDate) {
              const effectiveDateFormatted = DateFormatter.format(effectiveDate, {
                year: "numeric"
              });
              duration = `${effectiveDateFormatted} - ${duration}`;
            }
          }
          return {
            id: education?.id || index.toString(),
            school: education?.institution || "",
            degree: education?.major || "",
            duration
          };
        }),
        resumeLink: profile?.resumeUrl || "",
        skills: skills.reduce((prev, current, index) => {
          const categoryName: string = current?.categoryName || `Unknown Category ${index + 1}`;
          return { ...prev, [categoryName]: (current?.skillNames || "").split(",") };
        }, {})
      },
      contacts: contacts?.map((contact) => ({
        type: contact?.type || "",
        display: contact?.displayValue || "",
        href: contact?.value || "",
        label: contact?.label || ""
      }))
    };

    await cache.set(getProfileCacheKey, output, { ttlSeconds: 3600 });

    return output;
  } catch (error) {
    console.error("GetProfileError:", error);
    return null;
  }
}
