import { Wrapper } from "@/components/wrapper";
import { Navbar } from "./_components/navbar";
import { cn } from "@/lib/utils";
import { HeroSection } from "./_components/hero-section";
import { TrustedBySection } from "./_components/trusted-by-section";

export default function Home() {
  return (
    <div className="grid h-screen grid-cols-[1fr_minmax(0,var(--container-7xl))_1fr]">
      <div
        className={cn(
          "border-stone-100",
          "border-r bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(0,0,0,0.04)_5px,rgba(0,0,0,0.04)_6px)]",
        )}
      />
      <div className="">
        <Navbar />
        <main>
          <Wrapper className="flex h-full flex-col gap-[1.2px] bg-neutral-200/60">
            <HeroSection />
            <TrustedBySection />
          </Wrapper>
        </main>
      </div>
      <div
        className={cn(
          "border-stone-100",
          "border-l bg-[repeating-linear-gradient(-45deg,transparent,transparent_4px,rgba(0,0,0,0.04)_5px,rgba(0,0,0,0.04)_6px)]",
        )}
      />
    </div>
  );
}
