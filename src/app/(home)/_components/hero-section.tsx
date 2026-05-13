import { Button } from "@/components/ui/button";
import { IconLock, IconSparkle2 } from "@tabler/icons-react";

export const HeroSection = () => {
  return (
    <section className="bg-background flex w-full flex-col items-center justify-center gap-4 px-8 py-20">
      <SectionHeader
        badge={
          <EyeBrowBadge text="Now with AI autofill + interview prep">
            <IconSparkle2 stroke={2} className="size-4 text-neutral-500" />
          </EyeBrowBadge>
        }
        title="Stop losing track of your job search"
        description="Track every application, prep for interviews, and land your next role all in one place. Powered by AI."
      />

      <div className="mt-1 flex items-center justify-center gap-3">
        <Button variant="brand">Start tracking free</Button>
        <Button variant="brandOutline">Watch demo</Button>
      </div>

      <p className="text-center text-xs text-neutral-600">
        Free forever · No credit card needed · Setup in 2 minutes
      </p>

      <PreviewScreen />
    </section>
  );
};

type SectionHeaderProps = {
  badge?: React.ReactNode;
  title: string;
  description: string;
};

const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {badge}

      <div className="flex max-w-3xl flex-col items-center gap-4">
        <h1 className="text-center text-5xl leading-14 font-medium tracking-tighter text-balance">
          {title}
        </h1>

        <p className="max-w-[90%] text-center text-base font-normal text-balance text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
};

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

const PreviewScreen = () => {
  return (
    <div className="mt-10 flex h-full w-full items-center justify-center">
      <div className="h-full w-full overflow-hidden rounded-lg border border-neutral-200">
        <div className="flex items-center justify-between border-b border-neutral-200 bg-white p-2">
          <div className="flex items-center gap-2">
            <div className="size-2 cursor-pointer rounded-full bg-red-400 ring ring-red-500" />
            <div className="size-2 cursor-pointer rounded-full bg-yellow-400 ring ring-yellow-500" />
            <div className="size-2 cursor-pointer rounded-full bg-green-400 ring ring-green-500" />
          </div>
          <div className="bg-background flex w-90 items-center justify-center gap-1 rounded-sm border border-neutral-200 px-2 py-1">
            <IconLock className="size-3 text-neutral-600" />
            <span className="text-xs text-neutral-600">
              trackjobs.com/dashboard
            </span>
          </div>
          <div />
        </div>
        <div className="h-98 w-full"></div>
      </div>
    </div>
  );
};
