import fetchPublicData from "@/lib/api/fetchPublicData";
import { getTranslations } from "next-intl/server";
import React from "react";
import { OurTrainingProgramsT } from "../type";
import TopPagesSection from "@/components/ui/TopPagesSection";
import OurComponent from "@/components/OurComponent/OurComponent";
import { ImageSliderItemT } from "@/components/ui/Slider/type";

const page = async () => {
  const ourTrainingProgramData: OurTrainingProgramsT = await fetchPublicData({
    url: "our_training_programs",
  });
  const slider: ImageSliderItemT[] = await fetchPublicData({
    url: "our_training_program_sliders",
  });
  const t = await getTranslations();
  return (
    <div>
      <TopPagesSection title={t("our-training-programs")} />
      <OurComponent
        title={ourTrainingProgramData?.title_visit_audit_station}
        description={ourTrainingProgramData?.description_visit_audit_station}
        video={ourTrainingProgramData?.video}
        slider={slider}
        buttonTitle="contactwhatsapp"
        buttonLink="https://wa.me/971586028902"
      />
    </div>
  );
};

export default page;
