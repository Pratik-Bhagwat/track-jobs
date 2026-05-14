import {
  IconBriefcase,
  IconBuilding,
  IconLock,
  IconSparkles2,
  IconStack2,
} from "@tabler/icons-react";
import { EyeBrowBadge, SectionHeader } from "./utils";

export const FeatureSection = () => {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-14">
        <SectionHeader
          badge={
            <EyeBrowBadge text="Features">
              <IconStack2 stroke={2} className="size-4 text-neutral-500" />
            </EyeBrowBadge>
          }
          title="Everything you need in one place"
          description="Built for serious job seekers."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            illustration={<ApplicationTrackerIllustration />}
            title="Application tracker"
            description="Track status, dates, salary, contacts for every job."
          />
          <FeatureCard
            illustration={<SmartAutofillIllustration />}
            title="AI smart auto fill"
            description="Paste a URL Ai extracts all job details instantly."
          />
          <FeatureCard
            illustration={<InterPrepCoachIllustration />}
            title="Interview prep coach"
            description="Ai generate role-specific questions + STAR answers."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  illustration,
  title,
  description,
}: {
  illustration: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-background flex flex-col gap-5 rounded-lg border border-neutral-200/80 p-6">
      {illustration}
      <div className="space-y-2">
        <h3 className="text-lg font-medium tracking-tight text-neutral-900">
          {title}
        </h3>
        <p className="text-sm leading-6 text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

const ApplicationTrackerIllustration = () => {
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
          Interview
        </p>
        <div className="bg-interview-bg border-interview-text/10 text-interview-text rounded-md border p-2">
          <p className="text-xs">Senior Engineer</p>
          <span className="text-[10px]">Vercel</span>
        </div>
      </div>
      <div className="bg-background flex h-full w-1/3 flex-col gap-2 rounded-md border border-neutral-200/70 p-2">
        <p className="text-success text-left text-[10px] uppercase">Offer</p>
        <div className="flex h-full items-center justify-center rounded border-[1.8px] border-dashed border-neutral-200/70">
          <span className="text-[10px] text-neutral-400">Drop here</span>
        </div>
      </div>
    </div>
  );
};

const SmartAutofillIllustration = () => {
  return (
    <div className="flex h-54.5 w-full flex-col overflow-hidden rounded-lg border border-neutral-200">
      <div className="flex items-center justify-between gap-3 border-b border-neutral-200 bg-white p-2">
        <div className="flex items-center gap-2">
          <div className="size-2 cursor-pointer rounded-full bg-red-400 ring ring-red-500" />
          <div className="size-2 cursor-pointer rounded-full bg-yellow-400 ring ring-yellow-500" />
          <div className="size-2 cursor-pointer rounded-full bg-green-400 ring ring-green-500" />
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
                  San Fransisco, CA
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
};

const InterPrepCoachIllustration = () => {
  return (
    <div className="bg-secondary flex h-54.5 gap-2 rounded-md border border-neutral-200 p-4">
      <div className="flex w-full flex-col gap-2">
        <div className="bg-primary w-fit self-end rounded-l-full rounded-tr-full px-4 py-2 text-[10px] text-white">
          Tell me about a time you had to pivot quickly.
        </div>
        <div className="w-fit self-start rounded-tl-xl rounded-r-xl border border-neutral-200 bg-white px-4 py-2 text-[10px]">
          <div className="flex items-center gap-0.5">
            <IconSparkles2 className="size-4 text-neutral-600" />
            <span className="text-[10px] uppercase">start response</span>
          </div>
          <div className="mt-1.5 flex flex-col gap-1">
            <p className="text-[10px]">S: Q3 launced was delayed...</p>
            <p className="text-[10px]">T: Needed to reallocate...</p>
            <p className="text-[10px]">A: Organized daily standup...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
