import React from "react";
import { StatisticsI } from "./type.d";
import StatisticsCard from "./StatisticsCard";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { getLocale, getTranslations } from "next-intl/server";
import { useLocale } from "next-intl";
type StatsData = {
  number_in_world: number;
  years_of_experience: number;
  customers: number;
  satisfaction: string | number;
  over_gcc: string;
};

const Statistics = async () => {
  const t = await getTranslations("statistics");
  const locale = await getLocale();
  const statsData: StatsData = await fetchPublicData({
    url: "company_achievements",
  });

  const statisticsData: StatisticsI[] = [
    {
      id: 1,
      title: t("inTheWorld"),
      start: 0,
      end: statsData?.number_in_world,
    },
    {
      id: 2,
      value: `+ ${locale === "en" ? t("yrs") : ""}`,
      title: t("yearsOfExperience"),
      start: 0,
      end: statsData?.years_of_experience,
    },
    {
      id: 3,
      value: "+",
      title: t("customers"),
      start: 0,
      end: statsData?.customers,
    },
    {
      id: 4,
      value: "%",
      title: t("satisfaction"),
      start: 0,
      end: Number(statsData?.satisfaction),
    },
    {
      id: 5,
      value: statsData?.over_gcc,
      title: t("overworld"),
    },
  ];

  return (
    <div className="xl:h-[172px] lg:h-[172px] md:h-auto sx:h-auto xs:h-auto  w-full px_padding  xl:absolute lg:absolute md:relative sm:relative xs:relative z-10 xl:bottom-[4%] lg:bottom-[4%] md:bottom-[-4%] sm:bottom-[-4%] xs:bottom-[-4%] md:mt-3 sm:mt-3 xs:mt-3">
      <div className="bg-white border-[1px] border-secondary rounded-lg shadow-xl dark:bg-dark-background px-[24px] py-[16px] dark:shadow-dark w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-center">
        {statisticsData.map((el, index) => (
          <StatisticsCard
            key={el.id}
            cardData={el}
            isLast={index === statisticsData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
