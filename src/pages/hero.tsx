import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row sm:gap-12 max-w-5xl mx-auto">
      {/* Image Section */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="overflow-hidden rounded-2xl shadow-xl w-48 h-48 sm:w-60 sm:h-60 relative">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQFp5L6ohcHXhQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516952967456?e=2147483647&v=beta&t=z8jyf-5m46hI94njTgvpIo61dcn694G8D-XjFV-O68E"
            alt="Prof. Imon Mondal"
            className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </BoxReveal>

      {/* Text Section */}
      <div className="flex flex-col items-start justify-center max-w-xl">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[2.5rem] sm:text-[3.5rem] font-semibold">
            Imon Mondal<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-1 text-[1rem] sm:text-[1.2rem] leading-snug text-start">
            Assistant Professor, Electrical Engineering <br></br>
            Indian Institute of Technology Kanpur
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-4 text-sm sm:text-base text-muted-foreground text-start">
            <p>
              I work on analog integrated circuit design for signal processing
              and actively share my lectures for open learning.
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <Button className="mt-6 bg-[#5046e6]">Explore</Button>
        </BoxReveal>
      </div>
    </div>
  );
}
