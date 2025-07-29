import React from "react";
import CustomSection from "../ui/CustomSection/CustomSection";
import Image from "next/image";
import { DetailsT, TagT } from "./type";
import { getTranslations } from "next-intl/server";

type Props = {
  data: DetailsT;
};

const DetailsComponent = async ({ data }: Props) => {
  const t = await getTranslations();
  return (
    <CustomSection className="py-[56px]">
      <div className="flex flex-col gap-6">
        <h1 className="text-[24px] font-[700] text-light-text dark:text-dark-text">
          {data?.title}
        </h1>

        <div className="relative w-full xl:h-[472px] lg:h-[472px] md:h-[420px] sm:h-[400px] xs:h-[180px] rounded-2xl realtive">
          {data?.mainCategory && (
            <div className="absolute top-[3%] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[8px] xs:text-[8px] ltr:left-[2%] rtl:right-[2%]  xl:p-[10px] lg:p-[10px] md:p-[10px] sm:p-[6px] xs:p-[6px] bg-[#f6e2d0] z-10 rounded-lg">
              {data?.mainCategory}
            </div>
          )}
          <Image
            src={data?.image}
            alt={data?.image}
            fill
            className="h-full w-full"
          />
        </div>

        {data?.subCategory && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-dark-card dark:bg-light-bodyBg rounded-full"></div>
            <div className="text-[16px] font-bold text-secondary">
              {data?.subCategory}
            </div>
          </div>
        )}
        {data?.newsSubDetailes && (
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/svg/calendar.svg"
                alt="/images/svg/calendar.svg"
                width={100}
                height={100}
                className="xl:size-6 lg:size-6 md:size-6 sm:size-4 xs:size-4"
              />
              <div className="xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-light-text">
                {data?.newsSubDetailes?.created_at}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/images/svg/author.svg"
                alt="/images/svg/author.svg"
                width={100}
                height={100}
                className="xl:size-6 lg:size-6 md:size-6 sm:size-4 xs:size-4"
              />
              <div className="xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-light-text">
                {t("author")}: {data?.newsSubDetailes?.author_name}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/images/svg/eye.svg"
                alt="/images/svg/eye.svg"
                width={100}
                height={100}
                className="xl:size-6 lg:size-6 md:size-6 sm:size-4 xs:size-4"
              />
              <div className="xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-light-text">
                {data?.newsSubDetailes?.reading_time} {t("minutesreading")}
              </div>
            </div>
          </div>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: data?.description,
          }}
          className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[16px] xs:text-[16px] text-light-text dark:text-dark-text"></div>
      </div>

      {data?.tags && (
        <div className="min-h-[132px] p-6 rounded-[20px] bg-[#ECF8E3] ">
          <h3 className="xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] xs:text-[16px] px-2 ltr:border-l-[4px] rtl:border-r-[4px] border-secondary text-light-text dark:text-dark-text font-medium">
            {t("tags")}
          </h3>

          <div className="flex items-center flex-wrap xl:gap-6 lg:gap-6 md:gap-6 sm:gap-4 xs:gap-2 mt-6">
            {data?.tags?.map((tag: TagT) => {
              return (
                <div
                  key={tag?.id}
                  className=" p-[10px] bg-[#f6e2d0] xl:text-[20px] lg:text-[20px] md:text-[16px] sm:text-[14px] xs:text-[14px] font-medium  rounded-lg capitalize">
                  {tag?.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </CustomSection>
  );
};

export default DetailsComponent;
