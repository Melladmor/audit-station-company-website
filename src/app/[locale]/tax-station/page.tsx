import OurComponent from "@/components/OurComponent/OurComponent";
import { OurPlatformI } from "@/components/sections/OurPlatform/type";
import TopPagesSection from "@/components/ui/TopPagesSection";
import fetchPublicData from "@/lib/api/fetchPublicData";
import { getTranslations } from "next-intl/server";
import React from "react";

const page = async () => {
  const t = await getTranslations();
  const taxStationData: Omit<OurPlatformI, "image"> = await fetchPublicData({
    url: "tax_stations/tax",
  });
  return (
    <div>
      <TopPagesSection title={t("taxstation")} />
      <OurComponent
        title={taxStationData?.title}
        description={taxStationData?.description}
        video={taxStationData?.video}
        subTitle={t("connectWithAgent")}
      />
    </div>
  );
};

export default page;
