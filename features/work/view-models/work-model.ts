import { type WorkOverviewProps } from "@/features/work/components/work-overview";

export type WorkViewModel = Pick<
  WorkOverviewProps,
  "title" | "description" | "badges" | "metadata" | "imageProps"
>;
