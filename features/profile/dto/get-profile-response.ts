export type ProjectExperienceAttributes = {
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

export type ProjectLinkAttributes = {
  id: string | null;
  projectId: string | null;
  name: string | null;
  url: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
};

export type AttachmentAttributes = {
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

export type ProfileAttributes = {
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

export type ProjectExperienceAggregate = ProjectExperienceAttributes & {
  links: ProjectLinkAttributes[];
  attachments: AttachmentAttributes[];
};

export type WorkExperienceAttributes = {
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

export type SkillAttributes = {
  id: string | null;
  profileId: string | null;
  categoryName: string | null;
  skillNames: string | null;
  displayOrder: number | null;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
};

export type EducationAttributes = {
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

export type ContactAttributes = {
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

export type CertificationAttributes = {
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

export type GetProfileResponse = {
  profile: ProfileAttributes | null;
  workExperiences: WorkExperienceAttributes[];
  projectExperiences: ProjectExperienceAggregate[];
  skills: SkillAttributes[];
  education: EducationAttributes[];
  certification: CertificationAttributes[];
  contacts: ContactAttributes[];
};
