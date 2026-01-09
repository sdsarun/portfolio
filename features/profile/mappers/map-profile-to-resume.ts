// formatter
import { DateFormatter } from "@/infrastructure/formatter/date-formatter";

// view-models
import type { ResumeViewModel } from "@/features/resume/view-models/resume-model";

// dto
import type {
  CertificationAttributes,
  EducationAttributes,
  GetProfileResponse,
  SkillAttributes,
  WorkExperienceAttributes
} from "@/features/profile/dto/get-profile-response";

export function mapProfileToResume(data: GetProfileResponse): ResumeViewModel {
  const { profile, workExperiences = [], education = [], certification = [], skills = [] } = data;

  return {
    name: profile?.displayName || "",
    title: profile?.roleName || "",
    subtitle: "",
    resumeLink: profile?.resumeUrl || "",
    workExperience: mapWorkExperiences(workExperiences),
    education: mapEducation(education),
    certifications: mapCertifications(certification),
    skills: mapSkills(skills)
  };
}

function mapWorkExperiences(items: WorkExperienceAttributes[]): ResumeViewModel["workExperience"] {
  return items.map((work, index) => {
    const duration = buildDuration(work.startDate, work.endDate, work.isCurrent);

    return {
      id: work.id || index.toString(),
      position: work.jobTitle?.trim() || "",
      company: work.companyName?.trim() || "",
      duration,
      responsibilities: work.description?.split("\n") || []
    };
  });
}

function mapEducation(items: EducationAttributes[]): ResumeViewModel["education"] {
  return items.map((edu, index) => ({
    id: edu.id || index.toString(),
    degree: edu.major || "",
    school: edu.institution || "",
    duration: buildYearRange(edu.startDate, edu.endDate)
  }));
}

function mapCertifications(items: CertificationAttributes[]): string[] {
  return items
    .map((cert) => (cert.name ? (cert.issuer ? `${cert.name} (${cert.issuer})` : cert.name) : ""))
    .filter(Boolean);
}

function mapSkills(items: SkillAttributes[]): Record<string, string[]> {
  return items.reduce<Record<string, string[]>>((acc, skill, index) => {
    const key = skill.categoryName || `Unknown Category ${index + 1}`;
    acc[key] = (skill.skillNames || "").split(",");
    return acc;
  }, {});
}

function buildDuration(start?: string | null, end?: string | null, isCurrent?: boolean | null): string {
  if (start && end) {
    return `${format(start)} - ${format(end)}`;
  }

  if (start) {
    return `${format(start)} - ${isCurrent ? "Present" : ""}`;
  }

  return "";
}

function buildYearRange(start?: string | null, end?: string | null): string {
  if (start && end) {
    return `(${year(start)} - ${year(end)})`;
  }
  if (start) {
    return `${year(start)} -`;
  }
  return "";
}

function format(date: string) {
  return DateFormatter.format(date, { month: "short", year: "numeric" });
}

function year(date: string) {
  return DateFormatter.format(date, { year: "numeric" });
}
