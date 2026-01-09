// components
import { Box } from "@/shared/layout/box";
import { Separator } from "@/shared/ui/separator";
import { WorkOverview } from "@/features/work/components/work-overview";

// view-models
import { WorkViewModel } from "@/features/work/view-models/work-model";

export type WorkListItemProps = {
  work: WorkViewModel;
  isLast: boolean;
};

export function WorkListItem({ work, isLast }: WorkListItemProps) {
  return (
    <>
      <WorkOverview {...work} />
      {!isLast && (
        <Box width="responsive" className="mt-10 sm:hidden">
          <Separator />
        </Box>
      )}
    </>
  );
}
