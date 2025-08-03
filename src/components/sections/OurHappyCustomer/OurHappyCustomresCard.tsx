"use client";
import React from "react";
import { OurHappyCustomersI } from "./type";
import CustomImage from "@/components/ui/CustomImage";
import { truncateHtmlToText } from "@/lib/helper/helper";
import Tooltip from "@/components/ui/Tooltip/Tooltip";
type Props = OurHappyCustomersI;

function OurHappyCustomresCard({
  category,
  description,
  logo,
  name,
  subCategory,
}: Props) {
  return (
    <div className="xl:w-[411px]  lg:w-[411px]  md:w-[300px] sm:w-full xs:w-full xl:h-[357px] lg:h-[357px] md:h-auto sm:h-auto  xs:h-auto xl:p-[24px] lg:p-[24px] md:p-[20px] sm:p-[16px] xs:p-[16px] rounded-[20px] bg-light-card dark:bg-dark-card dark:border-dark-border border-[1px]   flex flex-col items-center gap-[16px]">
      <div className="flex items-center justify-center w-full">
        <CustomImage
          url={logo}
          className="xl:size-[120px] lg:size-[110px] md:size-[100px] sm:size-[80px] xs:size-[60px] rounded-full border-light-border border-[1px]"
        />
      </div>
      <div className="flex flex-col gap-[8px] items-center">
        <h2 className="xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[14px] text-light-text dark:text-dark-text  font-[700]">
          {name}
        </h2>
        <p>
          <span className="text-secondary capitalize xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[12px] xs:text-[12px] ">
            {category},{" "}
          </span>
          <span className="text-secondary capitalize xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[12px] xs:text-[12px] ">
            {subCategory}
          </span>
        </p>
      </div>
      <Tooltip content={description}>
        <div
          dangerouslySetInnerHTML={{
            __html: truncateHtmlToText(description, 70),
          }}
          className="text-light-text dark:text-dark-text xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[14px] text-center max-w-[300px]"></div>
      </Tooltip>
      {/* <div className="flex items-center justify-end w-full">
        <Link
          href={`our-happy-customers`}
          className="xl:w-[40px] xl:h-[40px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] sm:w-[25px] sm:h-[25px] xs:w-[25px] xs:h-[25px] cursor-pointer flex items-center justify-center rounded-full bg-secondary"
        >
          {locale === "en" ? (
            <FaArrowRight className="xl:size-4 lg:size-4 md:size-4 sm:size-3 xs:size-3 text-white" />
          ) : (
            <FaArrowLeft className="xl:size-4 lg:size-4 md:size-4 sm:size-3 xs:size-3 text-white" />
          )}
        </Link>
      </div> */}
    </div>
  );
}

export default OurHappyCustomresCard;
