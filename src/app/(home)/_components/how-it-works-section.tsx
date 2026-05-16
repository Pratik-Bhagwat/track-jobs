import {
  IconBolt,
  IconCalendar,
  IconFileInvoice,
  IconLock,
  IconPointer2,
  IconSparkle2,
} from "@tabler/icons-react";
import { EyeBrowBadge, SectionHeader, SectionWrappper } from "./utils";
import { Skeleton } from "@/components/ui/skeleton";

type Step = {
  title: string;
  description: string;
  illustration: React.ComponentType;
  order: number;
};

const steps: Step[] = [
  {
    title: "Add a job",
    description: "Paste a URL or job description AI fills the form for you.",
    illustration: AddJobIllustration,
    order: 1,
  },
  {
    title: "Track your progress",
    description: "Move applications through stages, log notes and contacts.",
    illustration: TrackYourProgressIllustration,
    order: 2,
  },
  {
    title: "Land the offer",
    description:
      "Use AI to prep for interviews and write standout cover letters.",
    illustration: LandOfferIllustration,
    order: 3,
  },
];

export const HowItWorksSection = () => {
  return (
    <SectionWrappper>
      <SectionHeader
        badge={
          <EyeBrowBadge text="How it works">
            <IconBolt stroke={2} className="size-4 text-neutral-500" />
          </EyeBrowBadge>
        }
        title="Up and running in minutes"
      />
      <div className="mt-6 grid grid-cols-3 gap-8 px-4">
        {steps.map((step) => (
          <HowItWorksCard key={step.title} {...step} />
        ))}
      </div>
    </SectionWrappper>
  );
};

const HowItWorksCard = ({
  illustration: Illustration,
  title,
  description,
  order,
}: Step) => {
  return (
    <div className="relative flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-5">
      <div className="bg-primary text-primary-foreground absolute -top-5 -left-5 flex size-12 items-center justify-center rounded-full">
        {order}
      </div>

      <Illustration />

      <div className="space-y-2">
        <h3 className="text-foreground text-lg font-medium tracking-tight">
          {title}
        </h3>

        <p className="text-secondary-foreground text-sm leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};

function AddJobIllustration() {
  return (
    <div className="flex h-48 overflow-hidden rounded-xl border border-neutral-200/70 px-8 py-4">
      <div className="flex h-full w-full flex-col gap-6">
        <div className="bg-background flex w-full items-center justify-center gap-1 rounded-sm border border-neutral-200 px-2 py-1">
          <IconLock className="size-3 text-neutral-500" />
          <span className="text-[10px] text-neutral-500">
            linkedin.com/jobs/view/1234
          </span>
        </div>

        <div className="bg-background flex-1 space-y-2 divide-y-2 divide-neutral-200 rounded-md border border-neutral-200 p-2">
          <div className="flex items-center justify-between pb-2">
            <span className="text-foreground text-xs font-medium">
              Job details
            </span>
            <div className="text-primary bg-primary/10 flex items-center justify-center gap-1 rounded p-1">
              <IconSparkle2 className="size-3" />
              <span className="text-[8px] uppercase">auto filled</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-0.5">
              <span className="text-muted-foreground text-[8px] font-medium">
                Role
              </span>
              <div className="bg-primary/10 rounded-md border border-neutral-200 px-2 py-1 text-center text-[10px] font-medium">
                Senior Developer
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-muted-foreground text-[8px] font-medium">
                Company
              </span>
              <div className="bg-primary/10 rounded-md border border-neutral-200 px-2 py-1 text-center text-[10px] font-medium">
                Linear
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-muted-foreground text-[8px] font-medium">
                Location
              </span>
              <div className="bg-primary/10 rounded-md border border-neutral-200 px-2 py-1 text-center text-[10px] font-medium">
                Remote
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-muted-foreground text-[8px] font-medium">
                Salary
              </span>
              <div className="bg-primary/10 rounded-md border border-neutral-200 px-2 py-1 text-center text-[10px] font-medium">
                $140k+
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackYourProgressIllustration() {
  return (
    <div className="flex h-48 overflow-hidden rounded-xl border border-neutral-200/70 px-4 py-4">
      <div className="flex w-full justify-center gap-3">
        <div className="bg-background/60 flex-1 space-y-2 rounded-lg border border-neutral-200/70 p-2">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-xs -tracking-tight uppercase">
              Applied
            </span>
            <div className="bg-muted flex size-6 items-center justify-center rounded-full p-1.5 text-xs font-medium">
              2
            </div>
          </div>
          <div className="bg-muted/70 h-12 w-full rounded-lg border-2 border-dashed border-neutral-200/70"></div>
          <div className="flex w-full flex-1 flex-col rounded-lg border border-neutral-200/70 p-2.5 text-[10px]">
            <span className="text-foreground font-medium">
              Frontend Engineer
            </span>
            <span className="text-muted-foreground">Stripe</span>
          </div>
        </div>
        <div className="bg-background/60 relative flex-1 space-y-2 rounded-lg border border-neutral-200/70 p-2">
          <div className="text-interview-text flex items-center justify-between">
            <span className="text-xs -tracking-tight uppercase">Interview</span>
            <div className="bg-muted flex size-6 items-center justify-center rounded-full p-1.5 text-xs font-medium">
              1
            </div>
          </div>
          <div className="bg-background relative flex h-full w-full flex-1 translate-y-1 -rotate-5 flex-col gap-3 rounded-lg border border-neutral-200/70 p-2.5 text-xs">
            <div className="flex flex-col gap-0.5">
              <span className="text-foreground font-medium">
                Senior Engineer
              </span>
              <span className="text-muted-foreground">Linear</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-violet-300/20 p-2 text-xs text-violet-500 uppercase">
              <IconCalendar className="size-4" />
              <span className="flex-1 text-balance">Tech screen</span>
            </div>
            <IconPointer2 className="absolute top-12 right-10 size-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function LandOfferIllustration() {
  return (
    <div className="flex h-48 overflow-hidden rounded-xl border border-neutral-200/70 px-4 py-4">
      <div className="relative flex h-72 w-full justify-center p-2.5">
        {/* Back card */}
        <div className="bg-background absolute top-2 z-10 h-[50%] rotate-3 rounded-lg border border-neutral-200">
          <div className="flex w-full items-center justify-between p-4">
            <div className="text-foreground flex items-center gap-1.5 text-xs tracking-wide uppercase">
              <IconFileInvoice className="size-4" />
              <span>AI Cover Letter</span>
            </div>

            <div className="bg-primary/10 rounded-full px-2 py-1 text-center text-[10px] tracking-tight uppercase">
              Generated
            </div>
          </div>

          <div className="space-y-2 px-4">
            <Skeleton className="h-2.5 w-24 rounded-full bg-neutral-200/50" />
            <Skeleton className="h-2.5 w-full rounded-full bg-neutral-200/50" />
            <Skeleton className="h-2.5 w-full rounded-full bg-neutral-200/50" />
            <Skeleton className="h-2.5 w-54 rounded-full bg-neutral-200/50" />
          </div>
        </div>

        {/* Front card */}
        <div className="bg-background absolute top-2 h-[50%] -rotate-2 rounded-lg border border-neutral-200">
          <div className="flex w-full items-center justify-between p-4">
            <div className="flex items-center gap-1.5 text-xs tracking-wide text-violet-800 uppercase">
              <IconCalendar className="size-4" />
              <span>Interview</span>
            </div>

            <div className="bg-primary/10 rounded-full px-2 py-1 text-center text-[10px] tracking-tight uppercase">
              Generated
            </div>
          </div>

          <div className="space-y-2 px-4">
            <Skeleton className="h-2.5 w-24 rounded-full bg-neutral-200/50" />
            <Skeleton className="h-2.5 w-full rounded-full bg-neutral-200/50" />
            <Skeleton className="h-2.5 w-full rounded-full bg-neutral-200/50" />
            <Skeleton className="h-2.5 w-54 rounded-full bg-neutral-200/50" />
          </div>
        </div>
      </div>
    </div>
  );
}
