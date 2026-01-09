// components
import { Box } from "@/shared/layout/box";
import { FadeIn } from "@/shared/animations/fade-in";
import { WorkListItem } from "@/features/work/components/work-list-item";

// view-models
import { WorkViewModel } from "@/features/work/view-models/work-model";

export type WorkListProps = {
  works: WorkViewModel[];
};

export function WorkList({ works }: WorkListProps) {
  if (works.length === 0) return null;

  return (
    <Box as="section" className="flex flex-col gap-10" padding="none" width="full">
      {works.map((work, idx) => (
        <FadeIn key={work.title}>
          <WorkListItem work={work} isLast={idx === works.length - 1} />
        </FadeIn>
      ))}
    </Box>
  );
}
