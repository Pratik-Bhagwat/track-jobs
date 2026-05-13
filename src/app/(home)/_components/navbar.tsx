import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header>
      <Wrapper>
        <nav className="bg-background flex items-center justify-between px-4 py-2 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
          <Link href="/" className="flex items-center gap-2 font-bold">
            TrackJobs
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-foreground/60 hover:text-foreground/80 text-xs font-medium transition-colors"
            >
              Login
            </Link>

            <Button variant="brand">Get started</Button>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
};
