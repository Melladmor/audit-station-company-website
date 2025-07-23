import fetchPublicData from "@/lib/api/fetchPublicData";
import { getTranslations } from "next-intl/server";
import React from "react";
import { OurTrainingProgramsT, PlatformT } from "../type";
import TopPagesSection from "@/components/ui/TopPagesSection";
import OurComponent from "@/components/OurComponent/OurComponent";

const page = async () => {
  const ourTrainingProgramData: OurTrainingProgramsT = await fetchPublicData({
    url: "our_training_programs",
  });

  const t = await getTranslations();
  return (
    <div>
      <TopPagesSection title={t("our-training-programs")} />
      <OurComponent
        title={ourTrainingProgramData?.title_visit_audit_station}
        description={ourTrainingProgramData?.description_visit_audit_station}
        video={ourTrainingProgramData?.video}
        buttonTitle="contactwhatsapp"
        buttonLink="https://wa.me/971586028902"
      />
    </div>
  );
};

export default page;
