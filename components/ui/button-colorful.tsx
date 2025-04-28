"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonColorfulProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export function ButtonColorful({
  className,
  label = "Join waitlist",
  ...props
}: ButtonColorfulProps) {
  return (
    <Button
      className={cn(
        "relative h-10 px-10 overflow-hidden",
        "bg-zinc-900 dark:bg-zinc-100",
        "transition-all duration-200",
        "group",
        className
      )}
      {...props}
    >
      {/* Gradient background effect */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500",
          "opacity-90 group-hover:opacity-60",
          "blur transition-opacity duration-500"
        )}
      />

      {/* Content */}
      <div className="relative flex items-center justify-center gap-2">
        <span className="text-white dark:text-zinc-900">{label}</span>
        {/* <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" /> */}
      </div>
    </Button>
  );
}
