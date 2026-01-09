export type ResumeViewModel = {
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
