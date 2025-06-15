import React from "react";
import Image from "next/image";
import { SlideI } from "./type";

type Props = SlideI;

function AdsSlide({ logo, description, title }: Props) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 z-0">
        <Image
          src={logo}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      <div className="relative z-20 w-full h-full px_padding xl:py-[40px] lg:py-[40px] md:py-[20px] sm:py-[15px] xs:py-[15px] flex flex-col">
        <h2 className="xl:text-[64px] lg:text-[64px] md:text-[40px] sm:text-[25px] xs:text-[25px] font-[700] text-white xl:mb-[24px] lg:mb-[24px] md:mb-[20px] sm:mb-[16px] xs:mb-[16px]">
          {title}
        </h2>
        <p className="xl:text-[32px] lg:text-[32px] md:text-[25px] sm:text-[14px] xs:text-[14px] font-[400] text-white">
          {description}
        </p>
      </div>
    </div>
  );
}

export default AdsSlide;
