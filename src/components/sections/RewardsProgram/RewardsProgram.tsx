import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import RewardsProgramHead from "./RewardsProgramHead";
import {
  Reward_DetailsT,
  RewardCardsT,
  RewardsProgramI,
  RewardTierT,
} from "./type";
import { RewardCardsI } from "./RewardCards/type";
import RewardCard from "./RewardCards/RewardCard";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { reverseArray } from "@/lib/helper/helper";

const RewardsProgram = async () => {
  const t = await getTranslations("sections.rewardsprogram");
  const title = await getTranslations();
  const reward_details: Reward_DetailsT = await fetchPublicData({
    url: "reward_details",
  });
  const reward_details_with_data: RewardTierT[] = await fetchPublicData({
    url: "reward_details_with_data",
  });
  const pointsDetailes: RewardTierT[] = reward_details_with_data
    ? reward_details_with_data?.map((el: RewardTierT) => {
        return { ...el, subTitle: title("points") };
      })
    : [];

  const our_rewards: RewardCardsT[] = await fetchPublicData({
    url: "our_rewards",
  });

  const ourRewardCard: RewardCardsI[] = our_rewards
    ? our_rewards?.map((el: RewardCardsT, index: number) => {
        return {
          id: index,
          subTitle: el?.description,
          title: el?.name,
          image: "/images/reward.png",
        };
      })
    : [];

  const rewardProgramData: RewardsProgramI = {
    title: reward_details?.title,
    description: reward_details?.description,
    titlePoints: t("title"),
    subTitlePoints: t("subTitle2"),
    points: pointsDetailes,
    cards: ourRewardCard,
  };

  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]">
      <RewardsProgramHead data={rewardProgramData} />
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 mt-16">
        {reverseArray(rewardProgramData?.cards)?.map((el: RewardCardsI) => {
          return <RewardCard key={el?.id} {...el} />;
        })}
      </div>
    </CustomSection>
  );
};

export default RewardsProgram;
