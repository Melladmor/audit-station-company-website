import Button from "@/components/ui/Buttons/Button";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import { getTranslations } from "next-intl/server";
import React from "react";

type Props = {
  title: string;
  discription: string;
  videoLink: string;
};

const TrainingProgramDiscover = async ({
  title,
  discription,
  videoLink,
}: Props) => {
  const t = await getTranslations();
  return (
    <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col items-start w-full xl:gap-6 lg:gap-6 md:gap-4 sm:gap-2 xs:gap-2 xl:h-[415px] lg:h-[415px] md:h-[315px] relative">
      <div className=" h-full w-full flex flex-col xl:gap-6 lg:gap-6 md:gap-6 sm:gap-4 xs:gap-4 py-[60px]">
        <h3 className="xl:text-[32px] lg:text-[32px] md:text-[26px] sm:text-[20px] xs:text-[16px] text-light-text dark:text-dark-text font-[600]">
          {title}
        </h3>
        <p className="text-light-text dark:text-dark-text xl:text-[20px] lg:text-[20px] md:text-[14px] sm:text-[14px] xs:text-[12px]">
          {discription}
        </p>
        <Button
          title={t("discovermore")}
          isLink
          not_blank
          path="our-training-programs"
          className="btn_size w-[50%]"
        />
      </div>
      <div className="h-full w-full relative">
        <div className="w-[90%] h-[90%] bg-[#FFEBD9] absolute ltr:right-0 rtl:left-0 bottom-0 xl:block lg:block md:block sm:hidden xs:hidden"></div>
        <div className=" xl:absolute lg:absolute md:absolute top-0 ltr:left-0 rtl:right-0 xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full xs:w-full xl:h-[90%] lg:h-[90%] md:h-[90%] sm:h-full xs:h-full shadow-light">
          <VideoPlayer videoLink={videoLink} />
        </div>
      </div>
    </div>
  );
};

export default TrainingProgramDiscover;
