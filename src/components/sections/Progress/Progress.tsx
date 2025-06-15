import React from "react";
import { ProgressI } from "./type";

type Props = ProgressI;

const Progress = ({ max, value, title, subTitle }: Props) => {
  return (
    <div className="flex flex-col gap-[3.5px] items-start">
      {title && (
        <p className="xl:text-[20px] lg:text-[16px] md:text-[12px] sm:text-[12px] xs:text-[12px] text-[#1A1A1A]">
          {title}
        </p>
      )}
      <progress
        className="progress custom_progress w-full h-2"
        value={value}
        max={max}></progress>
      {subTitle && (
        <div className="flex gap-[3.5px] items-center mt-1">
          <div className="xl:w-[12.5px] xl:h-[12.5px] lg:w-[8.5px] lg:h-[8.5px] md:w-[7.5px] md:h-[7.5px] sm:w-[7.5px] sm:h-[7.5px] xs:w-[7.5px] xs:h-[7.5px] bg-secondary rounded-full"></div>
          <p className="xl:text-[14px] lg:text-[10px] md:text-[10px] sm:text-[10px] xs:text-[10px] text-black/70">
            {subTitle}
          </p>

          <p className="xl:text-[14px] lg:text-[10px] md:text-[10px] sm:text-[10px] xs:text-[10px] text-black/70">
            {value}
          </p>
        </div>
      )}
    </div>
  );
};

export default Progress;
