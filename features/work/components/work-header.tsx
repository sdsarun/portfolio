// components
import { Box } from "@/shared/layout/box";
import { Typography } from "@/shared/ui/typography";

export function WorkHeader() {
  return (
    <Box as="section" className="py-[10rem] flex flex-col gap-1">
      <Typography as="h1">Showcasing My Work and Passion Projects</Typography>
      <Typography as="p" variant="p2" className="text-muted-foreground">
        Not every project here is groundbreaking. Some are just me practicing new tricks, testing my
        limits, or just having fun while learning. But hey, every line of code counts!
      </Typography>
    </Box>
  );
}
