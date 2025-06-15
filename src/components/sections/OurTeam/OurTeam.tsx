import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import {
  OurTeamReturnedData,
  RewardCardsI,
} from "../RewardsProgram/RewardCards/type";
import OurTeamContainer from "./OurTeamContainer";
import fetchPublicData from "@/lib/api/fetchPublicData";

const OurTeam = async () => {
  const t = await getTranslations("sections.ourteam");
  const ourTeam = await fetchPublicData({ url: "our_teams" });
  const ourTeamData: RewardCardsI[] = ourTeam?.map(
    (el: OurTeamReturnedData) => {
      return {
        id: el?.id,
        title: el?.name,
        description: el?.description,
        subTitle: el?.position,
        image: el?.image,
        links: [
          { id: 1, name: "facebook", url: el?.facebook },
          { id: 2, name: "x", url: el?.twitter },
          { id: 3, name: "instagram", url: el?.instagram },
          { id: 4, name: "linkedin", url: el?.linkedin },
          { id: 5, name: "telegram", url: el?.telegram },
          { id: 6, name: "whatsapp", url: el?.whatsapp },
          { id: 7, name: "youtube", url: el?.youtube },
          { id: 8, name: "snapchat", url: el?.snapchat },
          { id: 9, name: "tiktok", url: el?.tiktok },
        ],
      };
    }
  );

  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]"
      id="ourteam">
      <OurTeamContainer data={ourTeamData} />
    </CustomSection>
  );
};

export default OurTeam;
