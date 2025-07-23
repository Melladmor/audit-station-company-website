import fetchPublicData from "@/lib/api/fetchPublicData";
import { getTranslations } from "next-intl/server";
import React from "react";
import { PlatformT } from "../type";
import TopPagesSection from "@/components/ui/TopPagesSection";
import OurComponent from "@/components/OurComponent/OurComponent";

const page = async () => {
  const ourPlatformData: PlatformT = await fetchPublicData({
    url: "our_platforms",
  });

  const t = await getTranslations();
  return (
    <div>
      <TopPagesSection title={t("descoverourplatform")} />
      <OurComponent
        title={ourPlatformData?.title}
        description={ourPlatformData?.description}
        video={ourPlatformData?.video}
        image={ourPlatformData?.image}
        buttonTitle="visitaudit"
        buttonLink="https://auditstation.io"
      />
    </div>
  );
};

export default page;
