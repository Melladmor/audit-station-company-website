"use client";
import CustomImage from "@/components/ui/CustomImage";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
};

const OurPlatformHead = ({ description, image, title }: Props) => {
  return (
    <div className="flex xl:flex-nowrap lg:flex-nowrap sm:flex-wrap xs:flex-wrap gap-[24px]  items-start mb-[32px]">
      <div className="xl:h-[628px] lg:h-[628px] md:h-[450px] sm:h-[400px] xs:h-[300px] w-full relative">
        <div className="w-[90%] h-[90%] absolute ltr:right-0 rtl:left-0 top-0 bg-[#ECF8E3]"></div>
        <div className="w-[90%] h-[90%] absolute ltr:left-0 rtl:right-0 bottom-0 bg-white border border-secondary xl:rounded-[0px_200px] lg:rounded-[0px_200px] md:rounded-[0px_200px] sm:rounded-[0px_100px] xs:rounded-[0px_100px] p-[30px]">
          <CustomImage
            url="/logos/auditlogoblack.svg"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="xl:h-[628px] lg:h-[628px] md:h-[450px] sm:h-[400px] xs:h-[300px]  w-full  relative">
        <div
          className="h-full  w-full xl:rounded-[0px_200px] lg:rounded-[0px_200px] md:rounded-[0px_200px] sm:rounded-md xs:rounded-md  bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
          }}>
          <div className="h-full flex flex-col items-center justify-center gap-[16px] text-center xl:rounded-[0px_200px] lg:rounded-[0px_200px] md:rounded-[0px_200px] sm:rounded-md xs:rounded-md bg-black bg-opacity-40 xl:p-[24px] lg:p-[24px] md:p-[24px] sm:p-[16px] xs:p-[14px]">
            <h3 className="xl:text-[40px] lg:text-[32px] md:text-[23px] sm:text-[20px] xs:text-[18px] font-[700] text-white">
              {title}
            </h3>
            <p className="xl:text-[32px] lg:text-[24px] md:text-[18px] sm:text-[15px] xs:text-[12px] font-normal text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPlatformHead;
