// components
import { Typography } from "@/shared/ui/typography";

// view-models
import type { HomeViewModel } from "@/features/home/view-models/home-model";

export type HomHeaderProps = {
  displayName: HomeViewModel["displayName"];
  roleName: HomeViewModel["roleName"];
};

export function HomHeader({ displayName, roleName }: HomHeaderProps) {
  return (
    <div className="py-[20rem] flex flex-col gap-1">
      <Typography as="h1">{displayName}</Typography>
      <Typography as="p" variant="p2" className="italic">
        {roleName}
      </Typography>
    </div>
  );
}
