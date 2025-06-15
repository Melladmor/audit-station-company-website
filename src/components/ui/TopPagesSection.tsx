import { getTranslations } from "next-intl/server";
import React from "react";

type Props = {
  title: string;
};

const TopPagesSection = async (props: Props) => {
  const t = await getTranslations();
  return (
    <div
      className="w-full xl:h-[320px] lg:h-[320px] md:h-[320px] sm:h-[220px] xs:h-[220px] bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/slide2.jpg')",
      }}>
      <div className="absolute inset-0 backdrop-blur-[3px] bg-white/30 z-10" />

      <div className="relative z-20 flex items-center justify-center h-full ">
        <div className="relative ">
          <h1 className="xl:text-[64px] lg:text-[64px] md:text-[64px] sm:text-[45px] xs:text-[45px] font-[700] capitalize text-white">
            {props.title}
          </h1>
          <p className="text-secondary capitalize text-[16px] font-[700] absolute right-[-20px] bottom-[-20px]">
            {t("auditstationcompany")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopPagesSection;
