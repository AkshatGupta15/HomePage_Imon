import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { Hero } from "@/pages/hero";

export function AnimatedGridPatternDemo() {
  return (
    <div className="mt-[-120px] relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 ",
        )}
        
      />
      <Hero/>
    </div>
  );
}
