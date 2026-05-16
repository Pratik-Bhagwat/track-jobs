import { cn } from "@/lib/utils";
import React from "react";

type EyeBrowBadgeProps = {
  children?: React.ReactNode;
  text: string;
};

const EyeBrowBadge = ({ children, text }: EyeBrowBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5">
      {children}
      <p className="text-[10px] font-semibold tracking-wide text-neutral-500 uppercase">
        {text}
      </p>
    </div>
  );
};

type SectionHeaderProps = {
  badge?: React.ReactNode;
  title: string;
  description?: string;
  align?: "left" | "center";
  variant?: "hero" | "default";
};

const SectionHeader = ({
  badge,
  title,
  description,
  align = "center",
  variant = "default",
}: SectionHeaderProps) => {
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
      )}
    >
      {badge}

      <div
        className={cn(
          "flex flex-col gap-4",
          isHero ? "max-w-4xl" : "max-w-3xl",
        )}
      >
        <h1
          className={cn(
            "font-medium tracking-tight text-balance text-neutral-950",
            isHero
              ? "leading-[1.05] sm:text-6xl lg:text-5xl"
              : "leading-tight sm:text-4xl",
          )}
        >
          {title}
        </h1>

        {description && (
          <p
            className={cn(
              "mx-auto max-w-2xl text-base text-balance text-neutral-600",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

type SectionWrappperProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionWrappper = ({ children, className }: SectionWrappperProps) => {
  return (
    <section className={cn("bg-background w-full px-6 py-24", className)}>
      <div className="mx-auto flex max-w-7xl flex-col gap-6">{children}</div>
    </section>
  );
};

export { SectionHeader, EyeBrowBadge, SectionWrappper };
