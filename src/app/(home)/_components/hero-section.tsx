import { Button } from "@/components/ui/button";
import { IconLock, IconSparkle } from "@tabler/icons-react";
import { EyeBrowBadge, SectionHeader, SectionWrappper } from "./utils";

export const HeroSection = () => {
  return (
    <SectionWrappper>
      <SectionHeader
        variant="hero"
        badge={
          <EyeBrowBadge text="Now with AI autofill + interview prep">
            <IconSparkle stroke={2} className="size-4 text-neutral-500" />
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
    </SectionWrappper>
  );
};

const PreviewScreen = () => {
  return (
    <div className="mt-6 flex h-full w-full items-center justify-center">
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
