import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import TrainingProgramHead from "./TrainingProgramHead";
import { OurPlatformI } from "../OurPlatform/type";
import TrainingProgramDiscover from "./TrainingProgramDiscover";
import fetchPublicData from "@/lib/api/fetchPublicData";
const TrainingPrograms = async () => {
  const t = await getTranslations("sections.trainingprograms");
  const trainingProgramData = await fetchPublicData({
    url: "our_training_programs",
  });
  const trainingProgramHeadData: Omit<OurPlatformI, "id" | "video"> = {
    image: trainingProgramData?.image,
    title: trainingProgramData?.title_visit_audit_station,
    description: trainingProgramData?.description_visit_audit_station,
  };
  const trainingProgramDicoverData: Omit<OurPlatformI, "image" | "id"> = {
    title: trainingProgramData?.title_discover,
    description: trainingProgramData?.description_discover,
    video: trainingProgramData?.video,
  };
  return (
    <CustomSection
      title={{
        first: t("first"),
        second: t("second"),
        subTitle: t("subTitle"),
      }}
      className="mt-[100px]">
      <TrainingProgramHead
        title={trainingProgramHeadData?.title}
        discription={trainingProgramHeadData?.description}
        image={trainingProgramHeadData?.image}
      />
      <TrainingProgramDiscover
        title={trainingProgramDicoverData?.title}
        videoLink={trainingProgramDicoverData?.video}
        discription={trainingProgramDicoverData?.description}
      />
    </CustomSection>
  );
};

export default TrainingPrograms;
