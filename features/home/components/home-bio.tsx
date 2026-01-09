// components
import { Typography } from "@/shared/ui/typography";

export type HomeBioProps = {
  title: string | null;
  description: string | null;
};

export function HomeBio({ title, description }: HomeBioProps) {
  return (
    <>
      <Typography as="h2" variant="h2" className="mt-10">
        {title}
      </Typography>

      <Typography as="p" variant="p1" className="my-10">
        {description}
      </Typography>
    </>
  );
}
