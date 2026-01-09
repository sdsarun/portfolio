// core
import { type Metadata } from "next";

// page
import WorkPage from "@/features/work/pages/work-page";

export const revalidate = 3600; // in seconds
export const metadata: Metadata = {
  title: "work"
};

export default WorkPage;
