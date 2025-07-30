import React from "react";
import { MembershipTierT, RewardProgramT } from "../type";
import fetchPublicData from "@/lib/api/fetchPublicData";
import TopPagesSection from "@/components/ui/TopPagesSection";
import { getTranslations } from "next-intl/server";
import OurComponent from "@/components/OurComponent/OurComponent";

const page = async () => {
  const t = await getTranslations();
  const reward_details: RewardProgramT = await fetchPublicData({
    url: "reward_details",
  });
  const reward_details_with_data: MembershipTierT[] = await fetchPublicData({
    url: "reward_details_with_data",
  });
  return (
    <div>
      <TopPagesSection
        title={`${t("sections.rewardsprogram.first")} ${t(
          "sections.rewardsprogram.second"
        )}`}
      />
      <OurComponent
        title={reward_details?.title}
        description={reward_details?.description}
        rewards={{
          terms: reward_details?.terms,
          rewardsTable: reward_details_with_data,
        }}
      />
    </div>
  );
};

export default page;
