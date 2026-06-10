"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

type GradientBackgroundProps = {
  className?: string;
  variant?: "indigo" | "teal" | "sky";
};

const gradients: Record<NonNullable<GradientBackgroundProps["variant"]>, string> = {
  indigo: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
  teal: "radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)",
  sky: "radial-gradient(125% 125% at 50% 10%, #ffffff 38%, #dff4ff 68%, #38c39f 100%)",
};

export const Component = ({
  className,
  variant = "teal",
}: GradientBackgroundProps) => {
  const [count] = useState(0);

  return (
    <div className={cn("min-h-screen w-full relative", className)} data-count={count}>
      <div
        className="absolute inset-0 z-0"
        style={{
          background: gradients[variant],
          backgroundSize: "100% 100%",
        }}
      />
    </div>
  );
};

export default Component;
