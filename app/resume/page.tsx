// core
import { type Metadata } from "next";

// page
import ResumePage from "@/features/resume/pages/resume-page";

export const revalidate = 3600; // in seconds
export const metadata: Metadata = {
  title: "resume"
};

export default ResumePage;
