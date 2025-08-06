import Image from "next/image";
import React from "react";

type Props = {
  title: string;
};

const TopPagesSection = async (props: Props) => {
  return (
    <div className="w-full xl:h-[320px] lg:h-[320px] md:h-[320px] sm:h-[220px] xs:h-[220px] relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/topsection.jpg"
          alt="/images/topsection.jpg"
          fill
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />
      <div className="relative z-20 flex items-center justify-center h-full ">
        <div className="relative ">
          <h1 className="xl:text-[64px] lg:text-[64px] md:text-[64px] sm:text-[45px] xs:text-[30px] font-[700] capitalize text-white">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TopPagesSection;
