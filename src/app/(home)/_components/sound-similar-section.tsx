import {
  IconBrain,
  IconFileDescription,
  IconMailQuestion,
  IconMoodAnnoyed,
} from "@tabler/icons-react";

import { EyeBrowBadge, SectionHeader, SectionWrappper } from "./utils";

export const SoundSimilarSection = () => {
  return (
    <SectionWrappper className="bg-background w-full px-6 py-24">
      <SectionHeader
        badge={
          <EyeBrowBadge text="Problem / pain points">
            <IconMoodAnnoyed stroke={2} className="size-4 text-neutral-500" />
          </EyeBrowBadge>
        }
        title="Sound familiar?"
        description="The job search is chaotic. We fix that."
      />

      <div className="mt-3 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProblemCard
          icon={<IconFileDescription className="size-5" />}
          title="Messy spreadsheets"
          description="Endless rows, broken links, and forgotten notes. Spreadsheets were never meant for this."
        />

        <ProblemCard
          icon={<IconMailQuestion className="size-5" />}
          title="Ghosted again"
          description="Losing track of who to follow up with and when. Opportunities slip through the cracks."
        />

        <ProblemCard
          icon={<IconBrain className="size-5" />}
          title="Did I already apply here?"
          description="Losing track of where you applied and when."
        />
      </div>
    </SectionWrappper>
  );
};

const ProblemCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="group bg-secondary/40 hover:bg-secondary/70 flex flex-col gap-5 rounded-lg border border-neutral-200/80 p-6 transition-colors">
      <div className="flex size-11 items-center justify-center rounded-xl border border-neutral-200 bg-white text-neutral-500 shadow-xs">
        {icon}
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium tracking-tight text-neutral-900">
          {title}
        </h3>

        <p className="text-sm leading-6 text-neutral-600">{description}</p>
      </div>
    </div>
  );
};
