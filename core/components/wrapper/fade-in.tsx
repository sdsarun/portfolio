"use client";

import { useEffect, useRef, useState } from "react";

export type FadeInDirection = "top" | "bottom" | "left" | "right";

export type FadeInProps = {
  children: React.ReactNode;
  direction?: FadeInDirection
  distance?: number;
  duration?: number;
  delay?: number;
};

export const FadeIn = ({
  children,
  direction = "bottom",
  distance = 20,
  duration = 700,
  delay = 0,
}: FadeInProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  const transformMap: Record<FadeInDirection, string> = {
    top: `translateY(-${distance}px)`,
    bottom: `translateY(${distance}px)`,
    left: `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
  };

  return (
    <div
      ref={ref}
      style={{
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : transformMap[direction],
      }}
    >
      {children}
    </div>
  );
};
