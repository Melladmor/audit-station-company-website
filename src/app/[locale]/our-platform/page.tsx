import fetchPublicData from "@/lib/api/fetchPublicData";
import { getTranslations } from "next-intl/server";
import React from "react";
import { PlatformT } from "../type";
import TopPagesSection from "@/components/ui/TopPagesSection";
import OurComponent from "@/components/OurComponent/OurComponent";
import { ImageSliderItemT } from "@/components/ui/Slider/type";

const page = async () => {
  const ourPlatformData: PlatformT = await fetchPublicData({
    url: "our_platforms",
  });
  const slider: ImageSliderItemT[] = await fetchPublicData({
    url: "our_platform_sliders",
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
        slider={slider}
        buttonTitle="visitaudit"
        buttonLink="https://auditstation.io"
      />
    </div>
  );
};

export default page;
