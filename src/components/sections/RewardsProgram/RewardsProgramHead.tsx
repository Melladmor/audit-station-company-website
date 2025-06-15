import Button from "@/components/ui/Buttons/Button";
import { getTranslations } from "next-intl/server";
import React from "react";
import { RewardsProgramI, RewardTierT } from "./type";
import Progress from "../Progress/Progress";
import { reverseArray } from "@/lib/helper/helper";

type Props = {
  data: RewardsProgramI;
};

const RewardsProgramHead = async ({ data }: Props) => {
  const t = await getTranslations();

  return (
    <div className="xl:h-[600px] lg:h-[500px] md:h-[480px] sm:h-auto xs:h-auto w-full relative">
      <div className="xl:h-[600px] lg:h-[500px] md:h-[480px] sm:h-[400px] xs:h-[300px] xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full xs:w-full bg-[#FFEBD9] p-[48px_24px] flex items-center xl:justify-start lg:justify-start md:justify-start sm:justify-center xs:justify-center ">
        <div className="flex flex-col xl:items-start lg:items-start md:items-start sm:items-center xs:items-center xl:text-start lg:text-start md:text-start sm:text-center xs:text-center gap-[24px] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full xs:w-full">
          <h3 className="xl:text-[32px] lg:text-[32px] md:text-[26px] sm:text-[20px] xs:text-[16px] text-black font-[600]">
            {data?.title}
          </h3>
          <p className="text-black xl:text-[20px] lg:text-[20px] md:text-[14px] sm:text-[14px] xs:text-[12px]">
            {data?.description}
          </p>
          <Button
            title={t("seemore")}
            isLink
            not_blank
            path="rewards-program"
            className="btn_size w-[50%] dark:bg-secondary dark:text-dark-text dark:hover:bg-dark-background"
          />
        </div>
      </div>
      <div className="xl:h-[90%] lg:h-[90%] md:h-[90%] sm:h-full xs:h-full xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full xs:w-full bg-[#D8F0C4]  border-[#ECF8E3] border xl:absolute lg:absolute md:absolute sm:block xs:block top-[5%] ltr:right-0 rtl:left-0 p-[24px]">
        <div className="flex flex-col gap-4 justify-center text-center">
          <h3 className="xl:text-[24px] lg:text-[18px] md:text-[14px] sm:text-[16px] xs:text-[16px] text-black font-[600]">
            {data?.titlePoints}
          </h3>
          <p className="xl:text-[24px] lg:text-[18px] md:text-[14px] sm:text-[16px] xs:text-[16px] text-black font-normal">
            {data?.subTitlePoints}
          </p>
          <div className="flex flex-col gap-4">
            {reverseArray(data?.points)?.map((el: RewardTierT) => {
              return (
                <Progress
                  key={el?.id}
                  value={el?.points_to_reach}
                  max={200000}
                  subTitle={el?.subTitle}
                  title={el?.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsProgramHead;
