"use client";
import React from "react";
import { OurHappyCustomersI } from "./type";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import CustomImage from "@/components/ui/CustomImage";
type Props = OurHappyCustomersI;

function OurHappyCustomresCard({
  id,
  category,
  description,
  logo,
  name,
  sub_category,
}: Props) {
  return (
    <div className="xl:w-[411px] xl:h-[357px] lg:w-[411px] lg:h-[357px] md:w-[300px] md:h-auto sm:w-auto sm:h-auto xs:w-auto xs:h-auto xl:p-[24px] lg:p-[24px] md:p-[20px] sm:p-[16px] xs:p-[16px] rounded-[20px] bg-light-card dark:bg-dark-card dark:border-dark-border border-[1px]  xl:shadow-light lg:shadow-light md:shadow-light sm:shadow-none xs:shadow-none dark:shadow-dark flex flex-col items-center gap-[16px]">
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
          <span className="text-[#592A00] capitalize xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[12px] xs:text-[12px] ">
            {category},{" "}
          </span>
          <span className="text-[#592A00] capitalize xl:text-[14px] lg:text-[14px] md:text-[12px] sm:text-[12px] xs:text-[12px] ">
            {sub_category}
          </span>
        </p>
      </div>
      <p className="text-light-text dark:text-dark-text xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] xs:text-[14px] text-center">
        {description}
      </p>
      <div className="flex items-center justify-end w-full">
        <Link
          href={`our-happy-customers/${id}`}
          className="xl:w-[40px] xl:h-[40px] lg:w-[40px] lg:h-[40px] md:w-[35px] md:h-[35px] sm:w-[25px] sm:h-[25px] xs:w-[25px] xs:h-[25px] cursor-pointer flex items-center justify-center rounded-full bg-secondary">
          <FaArrowRight className="xl:size-4 lg:size-4 md:size-4 sm:size-3 xs:size-3 text-white" />
        </Link>
      </div>
    </div>
  );
}

export default OurHappyCustomresCard;
