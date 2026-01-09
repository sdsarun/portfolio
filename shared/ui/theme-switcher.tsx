"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/shared/ui/button";
import { useIsMounted } from "@/shared/hooks/use-is-mounted";
import { SkeletonButton } from "@/shared/ui/skeleton";

export type ThemeSwitcherProps = React.ComponentProps<"button">;

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const isMounted = useIsMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!isMounted) {
    return <SkeletonButton className="self-end" size="icon" />;
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      {...props}
    >
      {resolvedTheme && resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
