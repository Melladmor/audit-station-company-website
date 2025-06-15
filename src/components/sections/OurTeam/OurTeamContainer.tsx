"use client";
import React from "react";
import { RewardCardsI } from "../RewardsProgram/RewardCards/type";
import Slider from "@/components/ui/Slider/Slider";
import RewardCard from "../RewardsProgram/RewardCards/RewardCard";

type Props = {
  data: RewardCardsI[];
};

const OurTeamContainer = ({ data }: Props) => {
  return (
    <div className="xl:px-[70px] lg:px-[70px] md:px-[120px]">
      <Slider
        initialData={data}
        slidePerViewXl={3}
        slidePerViewLg={2}
        slidePerViewMd={1}
        nextAndPrev
        renderItem={(link) => {
          return (
            <RewardCard
              key={link?.id}
              {...link}
              className="rounded-[20px] border border-[#ACACAC] xl:shadow-card_shadow lg:shadow-card_shadow md:shadow-card_shadow sm:shadow-none xs:shadow-none xl:max-w-[356px] lg:max-w-[356px] md:max-w-auto sm:max-w-full xs:max-w-full xl:min-w-[356px] lg:min-w-[356px] md:min-w-[356px] sm:min-w-full xs:min-w-full"
              imageClassName="rounded-[20px_20px_0px_0px] h-[188px]"
              subClassName="text-[#676666]"
            />
          );
        }}
      />
    </div>
  );
};

export default OurTeamContainer;
