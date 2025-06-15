import CustomSection from "@/components/ui/CustomSection/CustomSection";
import { getTranslations } from "next-intl/server";
import React from "react";
import TrainingProgramHead from "./TrainingProgramHead";
import { OurPlatformI } from "../OurPlatform/type";
import TrainingProgramDiscover from "./TrainingProgramDiscover";
// import fetchPublicData from "@/lib/api/fetchPublicData";
const TrainingPrograms = async () => {
  const t = await getTranslations("sections.trainingprograms");
  // const trainingProgramData = await fetchPublicData({
  //   url: "our_training_programs",
  // });
  const trainingProgramHeadData: Omit<OurPlatformI, "id"> = {
    image: "/images/slide.jpg",
    title: "‘’Master Your Skills with Expert Training’’",
    description:
      "Enhance your skills with our expert-led training programs designed to equip professionals with the latest knowledge in auditing, tax consultancy, and financial management. Stay ahead with practical insights and industry-best practices.",
    video: "/videos/audit.mp4",
  };
  const trainingProgramDicoverData: Omit<OurPlatformI, "image" | "id"> = {
    title: "Discover Our Training Program , Know How It Work!",
    description:
      "Discover Our Training Program , Enhance your skills with our expert-led training  programs designed to equip professionals with the latest knowledge in auditing,",
    video: "/videos/audit.mp4",
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
