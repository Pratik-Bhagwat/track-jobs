import {
  IconBell,
  IconBriefcase,
  IconBuilding,
  IconCheck,
  IconFileTextAi,
  IconLock,
  IconSparkles2,
  IconStack2,
} from "@tabler/icons-react";
import { EyeBrowBadge, SectionHeader, SectionWrappper } from "./utils";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
  illustration: React.ComponentType;
};

const features: Feature[] = [
  {
    title: "Application tracker",
    description: "Track status, dates, salary, contacts for every job.",
    illustration: ApplicationTrackerIllustration,
  },
  {
    title: "AI smart autofill",
    description: "Paste a URL and AI extracts all job details instantly.",
    illustration: SmartAutofillIllustration,
  },
  {
    title: "Interview prep coach",
    description: "AI generates role-specific questions and STAR answers.",
    illustration: InterviewPrepCoachIllustration,
  },
  {
    title: "Cover letter generator",
    description: "Tailored cover letters written in seconds by AI.",
    illustration: CoverLetterGenerationIllustration,
  },
  {
    title: "Analytics dashboard",
    description:
      "Response rates, trends, and insights across all applications.",
    illustration: AnalyticsDashboardIllustration,
  },
  {
    title: "Follow-up reminders",
    description: "Never forget to follow up after an interview.",
    illustration: FollowUpRemindersIllustration,
  },
];

export const FeatureSection = () => {
  return (
    <SectionWrappper className="w-full bg-white px-6 py-24">
      <SectionHeader
        badge={
          <EyeBrowBadge text="Features">
            <IconStack2 stroke={2} className="size-4 text-neutral-500" />
          </EyeBrowBadge>
        }
        title="Everything you need in one place"
        description="Built for serious job seekers."
      />

      <div className="mt-3 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </SectionWrappper>
  );
};

const FeatureCard = ({
  illustration: Illustration,
  title,
  description,
}: Feature) => {
  return (
    <div className="bg-background flex flex-col gap-5 rounded-lg border border-neutral-200/80 p-6">
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
function ApplicationTrackerIllustration() {
  return (
    <div className="bg-secondary flex h-54.5 gap-2 rounded-md border border-neutral-200 p-2.5">
      <div className="bg-background flex h-full w-1/3 flex-col gap-2 rounded-md border border-neutral-200/70 p-2">
        <p className="text-left text-[10px] text-neutral-400 uppercase">
          applied
        </p>

        <div className="rounded-md border border-neutral-200 bg-white p-2">
          <p className="text-xs">Frontend Engineer</p>
          <span className="text-[10px] text-neutral-400">Stripe</span>
        </div>

        <div className="rounded-md border border-neutral-200 bg-white p-2">
          <p className="text-xs">Product Designer</p>
          <span className="text-[10px] text-neutral-400">Linear</span>
        </div>
      </div>

      <div className="bg-background flex h-full w-1/3 flex-col gap-2 rounded-md border border-neutral-200/70 p-2">
        <p className="text-interview-text text-left text-[10px] uppercase">
          interview
        </p>

        <div className="bg-interview-bg border-interview-text/10 text-interview-text rounded-md border p-2">
          <p className="text-xs">Senior Engineer</p>
          <span className="text-[10px]">Vercel</span>
        </div>
      </div>

      <div className="bg-background flex h-full w-1/3 flex-col gap-2 rounded-md border border-neutral-200/70 p-2">
        <p className="text-success text-left text-[10px] uppercase">offer</p>

        <div className="flex h-full items-center justify-center rounded border-[1.8px] border-dashed border-neutral-200/70">
          <span className="text-[10px] text-neutral-400">Drop here</span>
        </div>
      </div>
    </div>
  );
}

function SmartAutofillIllustration() {
  return (
    <div className="flex h-54.5 w-full flex-col overflow-hidden rounded-lg border border-neutral-200">
      <div className="flex items-center justify-between gap-3 border-b border-neutral-200 bg-white p-2">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-red-400 ring ring-red-500" />
          <div className="size-2 rounded-full bg-yellow-400 ring ring-yellow-500" />
          <div className="size-2 rounded-full bg-green-400 ring ring-green-500" />
        </div>

        <div className="bg-background flex flex-1 items-center justify-center gap-1 rounded-sm border border-neutral-200 px-2 py-1">
          <IconLock className="size-3 text-neutral-500" />

          <span className="text-[10px] text-neutral-500">
            linkedin.com/jobs/view/1234
          </span>
        </div>

        <div />
      </div>

      <div className="bg-secondary flex flex-1 items-center justify-center p-6">
        <div className="w-full divide-y rounded-md border border-neutral-200 bg-white p-4">
          <div className="flex w-full items-center justify-between pb-2">
            <p className="text-xs font-normal">Senior React Developer</p>

            <span className="text-xs font-medium text-neutral-400">
              $150k - $180k
            </span>
          </div>

          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <IconBuilding className="mb-0.5 size-3 text-neutral-500" />

                <span className="text-[10px] font-medium text-neutral-500">
                  Netflix
                </span>
              </div>

              <div className="flex items-center before:mr-1 before:size-1 before:rounded-full before:bg-neutral-500 before:content-['']">
                <span className="text-[10px] font-medium text-neutral-500">
                  San Francisco, CA
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <IconBriefcase className="mb-0.5 size-3 text-neutral-500" />

                <span className="text-[10px] font-medium text-neutral-500">
                  Full-time
                </span>
              </div>

              <div className="flex items-center before:mr-1 before:size-1 before:rounded-full before:bg-neutral-500 before:content-['']">
                <span className="text-[10px] font-medium text-neutral-500">
                  Remote Flexible
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InterviewPrepCoachIllustration() {
  return (
    <div className="bg-secondary flex h-54.5 gap-2 rounded-md border border-neutral-200 p-4">
      <div className="flex w-full flex-col gap-2">
        <div className="bg-primary w-fit self-end rounded-l-full rounded-tr-full px-4 py-2 text-[10px] text-white">
          Tell me about a time you had to pivot quickly.
        </div>

        <div className="w-fit self-start rounded-tl-xl rounded-r-xl border border-neutral-200 bg-white px-4 py-2 text-[10px]">
          <div className="flex items-center gap-0.5">
            <IconSparkles2 className="size-4 text-neutral-600" />

            <span className="text-[10px] uppercase">STAR response</span>
          </div>

          <div className="mt-1.5 flex flex-col gap-1">
            <p className="text-[10px]">S: Q3 launch was delayed...</p>

            <p className="text-[10px]">T: Needed to reallocate...</p>

            <p className="text-[10px]">A: Organized daily standups...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoverLetterGenerationIllustration() {
  return (
    <div className="bg-secondary flex h-54.5 gap-2 rounded-md border border-neutral-200 p-4">
      <div className="relative flex flex-1 items-center justify-center">
        <div className="h-fit w-28 rounded-md border border-neutral-200 bg-white p-2 text-[10px] text-balance">
          Dear Hiring Manager,
          <br />
          <span className="text-neutral-500">
            I am thrilled to apply for the Senior Designer role at Airbnb. With
            5+ years of experience in product design, I have led teams to...
          </span>
        </div>

        <div className="bg-primary absolute top-0 right-15 flex size-8 items-center justify-center rounded-full p-2">
          <IconFileTextAi className="size-4 text-white" />
        </div>
      </div>
    </div>
  );
}

function AnalyticsDashboardIllustration() {
  return (
    <div className="bg-secondary flex h-54.5 gap-2 rounded-md border border-neutral-200 p-4">
      <div className="grid w-full grid-cols-4 grid-rows-2 gap-2">
        <div className="col-span-2 flex flex-col rounded-md border border-neutral-200 bg-white p-2.5">
          <span className="text-[10px] tracking-tight text-neutral-500 uppercase">
            Applications
          </span>

          <span className="text-sm font-medium">48</span>
        </div>

        <div className="col-span-2 flex flex-col rounded-md border border-neutral-200 bg-white p-2.5">
          <span className="text-interview-text text-[10px] tracking-tight uppercase">
            Interviews
          </span>

          <span className="text-interview-text text-sm font-medium">7</span>
        </div>

        <div className="col-span-4 row-span-9 flex flex-col rounded-md border border-neutral-200 bg-white p-2">
          <span className="text-[10px] font-medium text-neutral-500">
            Activity
          </span>

          <div className="flex h-full justify-center gap-3">
            <div className="h-5 w-5 self-end rounded-t-full bg-neutral-300" />
            <div className="h-8 w-5 self-end rounded-t-full bg-neutral-400" />
            <div className="h-6.5 w-5 self-end rounded-t-full bg-neutral-500" />
            <div className="h-12 w-5 self-end rounded-t-full bg-neutral-600" />
            <div className="h-16 w-5 self-end rounded-t-full bg-neutral-800" />
            <div className="h-10 w-5 self-end rounded-t-full bg-neutral-900" />
            <div className="h-20 w-5 self-end rounded-t-full bg-neutral-950" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FollowUpRemindersIllustration() {
  return (
    <div className="bg-secondary flex h-54.5 gap-2 rounded-md border border-neutral-200 p-4">
      <div className="flex h-full w-full flex-1 flex-col justify-center gap-2">
        <div
          className={cn(
            "relative flex w-full gap-2 rounded-md border border-neutral-200 bg-white p-2",
            "after:absolute after:-top-0.5 after:-right-1 after:size-2 after:animate-pulse after:rounded-full after:bg-red-500 after:content-['']",
          )}
        >
          <div className="flex size-8 items-center justify-center rounded-full bg-neutral-200/80 p-2">
            <IconBell className="size-5 text-neutral-700" />
          </div>

          <div className="flex flex-col text-[10px]">
            <span className="font-medium">Follow-up: Vercel</span>

            <span className="text-neutral-500">
              It&apos;s been 3 days since onsite.
            </span>
          </div>
        </div>

        <div
          className={cn(
            "relative flex w-full gap-2 rounded-md border border-neutral-200 bg-white p-2 opacity-40",
          )}
        >
          <div className="flex size-8 items-center justify-center rounded-full bg-neutral-200/80 p-2">
            <IconCheck className="size-5 text-neutral-400" />
          </div>

          <div className="flex flex-col text-[10px] line-through">
            <span className="font-medium">Follow-up: Vercel</span>

            <span className="text-neutral-500">
              It&apos;s been 3 days since onsite.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
