import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { getFullImageUrl } from "@/utils/getFullImageUrl";
import heroContent from "@/data/heroContent.json"; // adjust path accordingly

export function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row sm:gap-12 max-w-5xl mx-auto lora-regular-400">
      {/* Image Section */}
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="overflow-hidden rounded-2xl shadow-xl w-48 h-48 sm:w-60 sm:h-60 relative">
          <img
            src={getFullImageUrl("/images/dp.jpeg")}
            alt={heroContent.name}
            className="w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </BoxReveal>

      {/* Text Section */}
      <div className="flex flex-col sm:items-start items-center justify-center max-w-xl">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[2.5rem] sm:text-[3.5rem] font-semibold">
            {heroContent.name}
            <span className="text-[#5046e6]">{heroContent.titleHighlight}</span>
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-1 text-[1rem] sm:text-[1.2rem] leading-snug sm:text-start text-center">
            {heroContent.designation} <br />
            {heroContent.institute}
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-4 text-sm sm:text-base text-muted-foreground sm:text-start text-center">
            <p>{heroContent.bio}</p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <Button className="mt-6 bg-[#5046e6]" onClick={handleScroll}>
            {heroContent.button}
          </Button>
        </BoxReveal>
      </div>
    </div>
  );
}
