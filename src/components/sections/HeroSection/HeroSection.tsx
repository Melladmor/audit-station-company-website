import React from "react";
import Ads from "./Ads/Ads";
import Statistics from "./Statistics/Statistics";

function HeroSection() {
  return (
    <div>
      <div className="relative  xl:pb-[172px] lg:pb-[172px]">
        <Ads />
        <Statistics />
      </div>
    </div>
  );
}

export default HeroSection;
